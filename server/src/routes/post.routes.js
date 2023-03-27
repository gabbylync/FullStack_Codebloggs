const PostController = require('../features/posts/post.controller')


const registerPostRoutes = (app) => {
    app.post('/post-create', PostController.postCreate)
    app.get('/allPosts', PostController.allPosts)
    app.get('/post-byId/:id', PostController.getPostById)
    app.get('/post-by-user/:id', PostController.postByUserId)
    app.patch('/post-update/:id', PostController.postUpdate)
    app.delete('/post-delete/:id', PostController.postDelete)
    app.patch('/post-like/:id', PostController.postLike)



}

module.exports = {registerPostRoutes}