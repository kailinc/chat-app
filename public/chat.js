// Make connection
let socket = io.connect('http://localhost:4000');


// send chat message
$('#send').on('submit', function (e) {
  e.preventDefault()
  // getting value of the forms
  let message = $('#text').val()
  let handle = $('#handle').val()

  socket.emit('chat', {
    message: message,
    handle: handle
  })
  // send the message down the socket
})

// listen for events

socket.on('chat', function(data) {
  $('#output').append('<p><strong>' + data.handle + ': </strong> ' + data.message + '</p>')
})
