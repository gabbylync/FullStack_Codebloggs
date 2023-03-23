const CommentController = require('../features/comments/comments.controller')

const registerCommentRoutes = (app) => {
    app.post('/comment-create', CommentController.commentCreate)
    app.get('/read-comment-byId/:id', CommentController.commentById)
    app.get('/comment-by-user/:id', CommentController.commentByUserId)
    app.patch('/comment-update/:id', CommentController.commentUpdate)
    app.delete('/comment-delete/:id', CommentController.commentDelete)
    app.patch('/comment-like', CommentController.commentLike)



}

module.exports = {registerCommentRoutes}