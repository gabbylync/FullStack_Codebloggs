const Comment = require("../../shared/DB/schemas/comment.schema");

const commentCreate = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json({ msg: "Comment Created", data: comment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "ERROR with backend: Comment NOT created" });
  }
};

const commentById = async (req, res) => {
  try {
    const { id: commentID } = req.params
    const Idcomment = await Comment.findById({ _id: commentID});
    res.status(200).send({msg: 'Comment Requested', data: Idcomment })
    // res.send(commentId);
    // console.log(commentId);
  } catch (error) {
    res.status(500).json({  msg: "ERROR with backend: comment not found"  });
  }
};

const commentByUserId = async (req, res) => {
  try {
    console.log("id" , req.params.id)
    // const comments = await Comment.find({ user: req.params.id }).select( "content");
    const comments = await Comment.find({ user: req.params.id }).sort({date: -1});
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).json({  msg: "ERROR with backend:comment by User ID not found" });
  }
};

const commentByPostId = async (req, res) => {
  try {
    console.log("id" , req.params.id)
    // const comments = await Comment.find({ user: req.params.id }).select( "content");
    const comments = await Comment.find({ post: req.params.id }).sort({date: -1});
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).json({  msg: "ERROR with backend:comment by User ID not found" });
  }
};




const commentUpdate = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        upsert: false,
      }
    );
    if (comment) {
      res.status(200).json({ data: comment });
    } else {
      res
        .status(404)
        .json({ err: `No information found for comment: ${req.params.id}` });
    }
  } catch (err) {
    console.error(err);
    res.status(404).send({ error: err });
  }
};

const commentDelete = async (req, res) => {
  try {
    const deleteComment = await Comment.findByIdAndDelete(req.params.id);

    if (!deleteComment) res.status(404).send("No comment found");
    res.status(200).send("Comment deleted");
  } catch (error) {
    res.status(404).send(error);
  }
};

const commentLike = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      { _id: req.params.id },
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.status(200).json({ data: comment });
  } catch (error) {
    console.error(error);
    res.status(404).send({ error: error });
  }
};

module.exports = {
  commentCreate,
  commentById,
  commentUpdate,
  commentDelete,
  commentByUserId,
  commentLike,
  commentByPostId
};
