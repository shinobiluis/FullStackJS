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

// obtiene un paciente en especifico por el id
exports.obtenerPaciente = async (req, res, next) => {
    try {
        const pacientes = await Paciente.findById(req.params.id);
        res.json (pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Actualizar paciente
exports.actualizarPaciente = async (req, res, next) => {
    try {req.body
        const pacientes = await Paciente.findOneAndUpdate(
            {_id: req.params.id}, 
            req.body,
            {new: true}
        );
        res.json (pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Eliminar paciente
exports.eliminarPaciente = async (req, res, next) => {
    try {
        const pacientes = await Paciente.findOneAndDelete({_id: req.params.id});
        // res.json (pacientes);
        res.json({ menseje: 'El paciente fue eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}
