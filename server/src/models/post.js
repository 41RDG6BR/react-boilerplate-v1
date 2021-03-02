const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    id: 1,
    address: {
        country: String,
        state: String,
        city: String,
        street: String
    },
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    email: String,
    name: String,
    phone: String
})

var PostMessage = mongoose.model('PostMessage', postSchema);

module.exports = PostMessage;
