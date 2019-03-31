var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    "id": String,
    "userPhone": Number,
    "userPwd": String
})

module.exports = mongoose.model("Users",userSchema)