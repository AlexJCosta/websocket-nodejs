var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('Socket connected');
  
  let counter = 0;
  setInterval(() => {
    socket.emit('hello', ++counter);
  }, 2000);
});

http.listen(3000, () => {
  console.log('listening in PORT: 3000');
});