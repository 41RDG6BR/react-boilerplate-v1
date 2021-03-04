const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mern-insta');

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

const data = {
    address: {
        country: 'Brasil',
        state: 'PR',
        city: 'Curitiba',
        street: 'Rua, nicaragua'
    },
        selectedFile: 'file',  
        email: 'rnogueira@gmail.com',
        name: 'Rodrigo Nogueira',
        phone: +5541988889876
};

const Model = mongoose.model('customers', customerSchema)
const cust= new Model(data);
cust.save(function (err, data){
    if(err) return console.log('ERRO: ', err);
    console.log('Inseriu: ', data)
})

console.log('Schema', customerSchema)

module.exports = customerSchema;

