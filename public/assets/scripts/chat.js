// Make connection
let socket = io.connect('http://localhost:4000');


// send chat message
$('#send').on('submit', function (e) {
  e.preventDefault()
  // getting value of the forms
  let message = $('#text').val()
  let handle = $('#handle').val()

  // send the message down the socket
  socket.emit('chat', {
    message: message,
    handle: handle
  })
  $('#text').val('')
})

$('#text').on('keypress', function () {
  let handle = $('#handle').val()
  socket.emit('typing', handle)
})
// listen for events

socket.on('chat', function(data) {
  let modTime = data.time.split(' ')[4]
  $('#output').append('<p><strong>' + data.handle + ': </strong> ' + data.message + ' @ ' + modTime + '</p>')
  $('#feedback').html('')
})

socket.on('typing', function (data) {
  $('#feedback').html('<p><em>'+ data +' is typing...</em></p>')
})
