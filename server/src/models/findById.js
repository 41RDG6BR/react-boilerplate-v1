const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String
}

const customerSchema = new Schema(_schema);
const CustomerModel = mongoose.model('Customer', customerSchema);

const id = '6041e4b4936d55e05ddd0698';

CustomerModel.findById(id, function (err, data) {
    if(err) return console.log('ERRO: ', err);
    return console.log('Buscou: ', data);
})

module.exports = CustomerModel;