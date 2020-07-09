import React, {Fragment} from 'react';

const Pacientes = ({citas}) => {
    if(citas.length === 0) return null;
    return ( 
        <Fragment>
            <h1 className="my-5">Administador de pacientes</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <a href="#" className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear cita</a>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            {citas.map(cita => (
                                <a key={cita._id} className="p-5 list-group-item list-group-item-action flex-colum align-items-start">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3 className="mb-3">{cita.nombre}</h3>
                                        <small className="fecha-alta">
                                            {cita.fecha} - {cita.hora}
                                        </small>
                                    </div>
                                    <p className="mb-0">
                                        {cita.sintomas}
                                    </p>
                                    <div className="contacto py-3">
                                        <p>Duesño: {cita.propietario}</p>
                                        <p>Teléfono: {cita.telefono}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment> 
    );
}
 
export default Pacientes;