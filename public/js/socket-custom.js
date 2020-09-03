var socket = io();
         //detecta cuando se conecta con el servidor
         socket.on('connect', () => {
            console.log('Conectado al servidor');
         });
         //detecta cuando se pierde la conexion con el server
         //on  escucha el server
         socket.on('disconnect', () => {
            console.log('Perdimos conexion con el servidor');
         });

         //emit  Envia informacion
         socket.emit(
            'enviarMensaje',
            {
               usuario: 'Luis Fernando',
               mensaje: 'Mensaje enviado desde el cliente .html',
            },
            function (resp) {
               console.log('Respuesta del server: ', resp);
            }
         );

         //escuchar informacion
         socket.on('enviarMensaje', (mensaje) => {
            console.log('Servidor:', mensaje);
         });