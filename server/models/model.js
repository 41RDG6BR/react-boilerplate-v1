module.exports = function(Schema) {
    const mongoose = require('mongoose');
    return mongoose.model('Customer', Schema);
}