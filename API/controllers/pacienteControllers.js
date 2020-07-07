

// Cuando se crea un nuevo cliente
exports.nuevoCliente = (req, res, next) => {
    console.log(req.body);
    // TODO: insertar en la base de datos
    res.json ({ mensaje: 'El cliente se agregó correctametne'});
}