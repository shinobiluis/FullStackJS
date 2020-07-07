const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    console.log(req.body);
    // crear objeto de paciente con datos de req.body
    const paciente = new Paciente(req.body);

    try {
        await paciente.save();
        res.json ({ mensaje: 'El cliente se agregó correctametne'});
    } catch (error) {
        console.log(error);
        next();
    }
}

// obtenerPacientes
exports.obtenerPacientes = async (req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json (pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}