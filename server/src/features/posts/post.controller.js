const Post = require("../../shared/DB/schemas/post.schema");

const postCreate = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json({ msg: "Post Created", data: post });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error" });
  }
};
//// Get: /allPosts /////////
const allPosts = async(req, res) => {
  try{
      const postz = await Post.find({}).populate('user').sort({date:-1})
      res.status(200).send({msg: 'All post successful', data: postz})

  } catch (error){
      res.status(404).json({msg:'ERROR getting all posts'})
      console.log(error)
  }
 
};



const getPostById = async (req, res) => {
  try {
    const { id: postID } = req.params
    const IDpost = await Post.findById({_id: postID})
    res.status(200).send({msg: 'Post Requested', data: IDpost})
    // const postId = await Post.findById({ post: req.query.id });
    // res.send(postId);
    // console.log(postId);
  } catch (error) {
    res.status(404).json({msg:'ERROR getting post'})
  }
};

const postByUserId = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.params.id }).select("content");
    console.log(posts);
    res.send(posts);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const postUpdate = async (req, res) => {
  try {
    // const allowed = filterUpdates(req.body);

    const post = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        upsert: false,
      }
    );
    if (post) {
      res.status(200).json({ data: post });
    } else {
      res
        .status(404)
        .json({ err: `No information found for post: ${req.params.id}` });
    }
  } catch (err) {
    console.error(err);
    res.status(404).send({ error: err });
  }
};

const postDelete = async (req, res) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    console.log(deletePost);
    if (!deletePost) res.status(404).send("No post found");
    res.status(200).send("Post deleted");
  } catch (error) {
    res.status(404).send(error);
  }
};

const postLike = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      { id: req.params.id },
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.status(200).json({ data: post });
  } catch (error) {
    console.error(error);
    res.status(404).send({ error: error });
  }
};

module.exports = {
  postCreate,
  getPostById,
  postByUserId,
  postUpdate,
  postDelete,
  postLike,
  allPosts
};
