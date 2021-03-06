const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema ={
    address: {
        country: String,
        state: String,
        city: String,
        street: String
    },
        selectedFile: String,
    created_at: {
        type: Date,
        default: Date.now,
    },
        email: String,
        name: String,
        phone: Number
}

const customerSchema = new Schema(_schema);

const CustomerModel = mongoose.model('Customer', customerSchema);

const Rodrigo = new CustomerModel({ name: 'Rodrigo' });
const query = { name: /Rodrigo/i}

Rodrigo.update(query, function (err, data){
    if(err) return console.log('ERRO: ', err);
    return console.log('Alterou: ', data);
})

module.exports = CustomerModel;