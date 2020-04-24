var mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
    "userId": String,
    "name": String,
    "avatar": String,
    "userName": String,
    "userPwd": String,
})
module.exports = mongoose.model('User', userSchema)
