const UserController = require('../features/users/users.controller')


const registerUserRoutes = (app) => {
    app.post('/login', UserController.userLogin)
    app.post('/register', UserController.userRegister)
    app.get('/user-by-id/:id', UserController.userById)
    app.get('/all-users', UserController.returnUsers)
    app.patch('/update-user/:id', UserController.userUpdate)
    app.get('/validatetoken/:token', UserController.validateTokenEndpoint)
}



module.exports = {registerUserRoutes}