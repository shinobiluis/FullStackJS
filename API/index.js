const express = require('express');
const mongose = require('mongoose');

// Crear servidor
const app = express();

// conectar a mongodb
mongose.Promise = global.Promise;
mongose.connect('mongodb://192.168.0.5:27017/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// puerto y arrancar el servidor
app.listen(4000, ()=> {
    console.log("Servidor funcionando");
});