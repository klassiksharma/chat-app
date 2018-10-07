let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

var clients = {};

io.sockets.on('connection', function(socket) {
    console.log('user connected');

    socket.on('add-user', function(data) {
        console.log("connecting:" + data)
        if(!clients[data] && data){
            clients[data] = {
                "socket": socket.id
            }
        }else{
            console.log("User already exist");
        }
        console.log("CL", clients)

    });

    socket.on('private-message', function(data){
        console.log("Sending: " + data.string + " to " + data.username + " from " + data.from);
        console.log("Clients data=>", clients)
        if (clients[data.username]){
            io.sockets.connected[clients[data.username].socket].emit("add-message", data);
            if(clients[data.from]){
                io.sockets.connected[clients[data.from].socket].emit("add-message", data);
            }

        } else {
            console.log("User does not exist: " + data.username);
        }
    });

    socket.on('disconnect',  function(){
        for(var name in clients) {
            if(clients[name].socket === socket.id) {
                delete clients[name];
                break;
            }
        }
        console.log('user disconnected');
    });

    socket.on('new-message', function(message) {
        console.log('nm', message)
        io.emit('new-message', message.string);
    });
});

server.listen(port, function() {
    console.log(`started on port: ${port}`);
});