const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
    name: String,
    email: String,
    phone: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    avatarUrl: {},
    address: {
        country: String,
        state: String,
        city: String,
        street: String
      }
}

module.exports = new Schema(_schema);
