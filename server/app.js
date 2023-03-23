// Initial dependencies and definitions
require('dotenv').config();
const Express = require('express');
const app = Express();
// app.use(cors());
app.use(Express.json());
const port = process.env.PORT || 3004;



//Import routes
const UserRoutes = require ('./src/routes/users.routes')
const CommentRoutes = require ('./src/routes/comment.routes')
const PostRoutes = require ('./src/routes/post.routes')



//use routes
UserRoutes.registerUserRoutes(app)
CommentRoutes.registerCommentRoutes(app)
PostRoutes.registerPostRoutes(app)




const MongoManager = require('./mongo-manager');
MongoManager.openMongoConnection();






app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})


