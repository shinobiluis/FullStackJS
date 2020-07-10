# API con Node.js

<p align="center"><img src="../assets_readme/proyecto.png" width="100%"></p>

Para ejecutar el proyecto en node primero debe ejecutar el [docker](../docker/).
 
Si ya ejecutó el docker solo se requiere realizar 2 pasos:
 
1. Ejecuta en terminal: `npm i` o `npm install` esto instalará todas las dependencias requeridas.
2. Ejecuta el proyecto con un `npm run dev`
 
Ahora puedes realizar pruebas con postman con las siguientes rutas que están en el proyecto

```js
// Agrega nuevos pacientes via POST
    router.post('/pacientes', 
        pacienteController.nuevoCliente
    )
    // Obtiene todos los registros de pacientes en la BD
    router.get('/pacientes', 
        pacienteController.obtenerPacientes
    )
    // Obtiene un paciente en especifico por id
    router.get('/pacientes/:id', 
        pacienteController.obtenerPaciente
    )

    // Actualizar un registro con un id especifico
    router.put('/pacientes/:id', 
        pacienteController.actualizarPaciente
    )

    // Elimina un registro con un id especifico
    router.delete('/pacientes/:id', 
        pacienteController.eliminarPaciente
    )
```


<p align="center"><img src="https://octodex.github.com/images/collabocats.jpg" width="500"></p>