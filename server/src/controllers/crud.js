require('../db/config');
const mongoose = require('mongoose');
const Schema = require('../schema');
const Model = require('../models/model')(Schema, 'Customer');

const CRUD = {
    create: function() {
        const data = { 
            name: 'Rodrigo Nogueira',
            email: 'nogueira@gmail.com',
            phone: +554198665868,
            avatarUrl: '/static/images/avatars/avatar_3.png',
            address: {
                country: 'USA',
                state: 'West Virginia',
                city: 'Parkersburg',
                street: '2849 Fulton Street'
              }        
                  
        }
        const Rodrigo = new Model(data);
        Rodrigo.save(function(err, data){
            if(err) return  console.log('ERRO: ', err);
            return console.log('Inseriu: ', data);
        });
    },
    retrive: function() {
        const query = { name : /rodrigo/i};

        Model.find(query, function (err, data) {
            if(err) return console.log('ERRO: ', err);
            return console.log('Buscou: ', data);
        });
    },
    update: function() {
        const query = { name : /rodrigo/i};
        const mod = { name: 'Rodrigo Nogueira' };
        const options = { multi: true };

        Model.update(query, mod, options, function (err, data) {
            if(err) return console.log('ERRO: ', err);
            return console.log('Alterou: ', data);
        });
    },
    delete: function() {
        const query = { name : /rodrigo/i};

        Model.remove(query, function (err, data) {
            if(err) return console.log('ERRO: ', err);
            return console.log('Deletou: ', data);
        });
    }
}

CRUD.create();