const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema ={
    customers: [{type: Schema.Types.ObjectId, ref: 'customers'}]
}

const customerSchema = new Schema(_schema);

const data = {
    customers: ['6041e4b4936d55e05ddd0698']
};

const Model = mongoose.model('mycustomers', customerSchema)
const cust= new Model(data);
cust.save(function (err, data){
    if(err) return console.log('ERRO: ', err);
    console.log('Inseriu: ', data)
})

console.log('Schema', customerSchema)

module.exports = customerSchema;

