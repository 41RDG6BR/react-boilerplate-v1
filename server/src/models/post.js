const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/be-mern-insta')
// const postSchema = mongoose.Schema({
//     id: 1,
//     address: {
//         country: String,
//         state: String,
//         city: String,
//         street: String
//     },
//     selectedFile: String,
//     createdAt: {
//         type: Date,
//         default: new Date(),
//     },
//     email: String,
//     name: String,
//     phone: String
// })

// var PostMessage = mongoose.model('PostMessage', postSchema);

// module.exports = PostMessage;


const Schema = mongoose.Schema;

const _schema ={
    country: String,
    state: String,
    city: String,
    street: String

}

const customerSchema = new Schema(_schema);

const data = {
    country: 'Brasil',
    state: 'PR',
    city: 'Curitiba',
    street: 'Rua, nicaragua'
};

const Model = mongoose.model('customers', customerSchema)
const cust= new Model(data);
cust.save(function (err, data){
    if(err) return console.log('ERRO: ', err);
    console.log('Inseriu: ', data)
})

console.log('Schema', customerSchema)
// module.exports = customerSchema;
