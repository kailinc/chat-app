let express = require('express')

let socket = require('socket.io')

// App Set up
let app = express()

let server = app.listen(4000, function () {
  console.log('Listening for requests on port 4000')
})
// will listen to the port

// static files to show when people on the site
// will look for index.html to show
app.use(express.static('public'))

// setting up socket

let io = socket(server)

io.on('connection', (socket) => {
  // socket is the particular socket made in that connection
  socket.on('chat', function (data) {
    // referring the that particular socket
    data.time = socket.handshake.time
    io.sockets.emit('chat', data)
    // refer to all the socket connected to the server
    // send the data to all socket connected to the server
  })
  // socket that is connected

  socket.on('typing', function (data) {
    socket.broadcast.emit('typing', data)
  })

})
// listen for connection with browser
