const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String
}

const customerSchema = new Schema(_schema);

const CustomerModel = mongoose.model('Customer', customerSchema);

const Rodrigo = new CustomerModel({ name: 'Rodrigo' });

Rodrigo.save(function (err, data){
    if(err) return console.log('ERRO: ', err);
    return console.log('Inseriu: ', data);
})

module.exports = CustomerModel;