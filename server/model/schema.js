const mongoose = require('mongoose')

const schemaRoom = mongoose.Schema({
    Room_name: String,
    members_needed: Number,
    thumbnail: String,
    location: String,
    mode: String,
    createdBy: String
})


module.exports = mongoose.model('rooms', schemaRoom)