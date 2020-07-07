

// Cuando se crea un nuevo cliente
exports.nuevoCliente = (res, req, next) => {
    // TODO: insertar en la base de datos
    res.json({mensaje: 'El cliente se agregó correctametne'});
}