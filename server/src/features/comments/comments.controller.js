const Comment = require("../../shared/DB/schemas/comment.schema");
const { filterUpdates } = require("../../../utilities");

const commentCreate = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json({ msg: "Comment Created", data: comment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: err });
  }
};

const commentById = async (req, res) => {
  try {
    const commentId = await Comment.findOne({ comment: req.query._id });
    res.send(commentId);
    console.log(commentId);
  } catch (error) {
    res.status(500).json({ error: err });
  }

};

const commentByUserId = async (req, res) => {
    try {
      const comments = await Comment.find({ user: req.params.id }).select('content');
      console.log(comments);
      res.send(comments);
    } catch (error) {
      res.status(500).json({ error: err });
    }
  
  };

const commentUpdate = async (req, res) => {
  try {
    // const allowed = filterUpdates(req.body);

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

module.exports = { commentCreate, commentById, commentUpdate, commentDelete, commentByUserId };
