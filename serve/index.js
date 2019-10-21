var express = require('express')
  , app = express()
  , server = require('http').createServer(app).listen(21041)
  , io = require('socket.io').listen(server)
  , ss = require('socket.io-stream')
  , path = require('path')
  , fs = require('fs')
  , port = process.env.PORT || 8080
router = express.Router();

app.listen(port);
console.log('conectado a 21041 ');

io.on('connection', (socket) => ss(socket).on('file', (stream, data) => stream.pipe(fs.createWriteStream('./uploads/' + path.basename(data.name)))));