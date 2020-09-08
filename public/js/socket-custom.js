var socket = io();

socket.on('connect', function() {

    console.log('Conectado al Servidos');

});

socket.on('disconnect', function() {
    console.log('Servidor desconectado');
});

socket.emit('enviarMensaje', {
    nombre: 'Adan',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server', resp);
});


socket.on('enviarMensaje', function(mensaje) {
    console.log('Mensaje del servidor:', mensaje);
});