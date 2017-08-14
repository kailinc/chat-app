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
  console.log('made socket connection')
})
// listen for connection with browser
