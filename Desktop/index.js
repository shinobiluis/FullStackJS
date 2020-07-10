const {app, BrowserWindow} = require('electron');

let appWindow;

function crearVentana(){
    appWindow = new BrowserWindow({

    });

    // cuando la apliacion es cerrada.
    appWindow.on('closed', ()=>{
        appWindow = null;
    });

    // cargar HTML
    appWindow.loadFile('./index.html');

    // cuando la app este lista, mostrar la ventana
    appWindow.once('ready-to-show', ()=>{
        appWindow.show();
    });
}

app.on('ready', crearVentana)