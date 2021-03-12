require('../db/config');
const Schema = require('../schema');
const Model = require('../models/model')(Schema, 'Customer');

class CRUD {
    create(data) {
        const Rodrigo = new Model(data);
        return Rodrigo.save().then((data) => {
            console.log('Inseriu: ', data);
            return data
        });
    }
    list(){
        const query = {};

        return Model.find(query).then((data)=>{
            console.log('Buscou: ', data);
            return data
        });
    }
    retrive() {
        const query = { name : /rodrigo/i};

        Model.find(query, function (err, data) {
            if(err) return console.log('ERRO: ', err);
            return console.log('Buscou: ', data);
        });
    }
    update() {
        const query = { name : /rodrigo/i};
        const mod = { name: 'Rodrigo Nogueira' };
        const options = { multi: true };

        Model.update(query, mod, options, function (err, data) {
            if(err) return console.log('ERRO: ', err);
            return console.log('Alterou: ', data);
        });
    }
    delete() {
        const query = { name : /rodrigo/i};

        Model.remove(query, function (err, data) {
            if(err) return console.log('ERRO: ', err);
            return console.log('Deletou: ', data);
        });
    }
}

module.exports = CRUD
