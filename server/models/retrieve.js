
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema ={
    address: {
        country: String,
        state: String,
        city: String,
        street: String
    }
}

const customerSchema = new Schema(_schema);
const CustomerModel = mongoose.model('customers', customerSchema);

const query = {
    address: {
        country: 'Brasil',
        state: 'PR',
        city: 'Curitiba',
        street: 'Rua, nicaragua'
    }
}


CustomerModel.find(query, function (err, data) {
    if (err) return console.log('ERRO: ', err);
    return console.log('Buscou; ', data);
})

module.exports = CustomerModel;
