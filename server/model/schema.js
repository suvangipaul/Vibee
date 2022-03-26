const mongoose = require('mongoose')

const schema = mongoose.Schema({
    Room_name: String,
    members_needed: Number,
    location: String,
    mode: String,
    createdBy: String
})


module.exports = mongoose.model('users', schema)