const express = require('express');
const mongose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

// Crear servidor
const app = express();

// conectar a mongodb
mongose.Promise = global.Promise;
mongose.connect('mongodb://192.168.0.5:27017/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// habilitar routing
app.use('/', routes());

// puerto y arrancar el servidor
app.listen(4000, ()=> {
    console.log("Servidor funcionando");
});