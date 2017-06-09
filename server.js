    var WebSocketServer = require('ws').Server
        , wss = new WebSocketServer({ port: 9092 });
       
    console.log('Server running on port 9092.');
       
    wss.on('connection', function connection(ws){
        console.log('Client connected');
        ws.on('message', function incoming(message){
            console.log('Received: %s', message);
        });
       
        ws.send('blaat');
    });
