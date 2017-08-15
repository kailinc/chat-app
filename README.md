## Description

This is my research on Web Sockets. I wanted to make a chat application but I noticed that AJAX request is not great for it. The server is
not built to automatically send data to client when there is new data. I talked to fellow coders about it and they said the key is Web
Sockets. I thought it would be rewarding to research about Web Sockets on General Assembly's Conference Day!

I made a powerpoint to teach my fellow coders at General Assembly about Web Sockets.
The link to the presentation is here: https://docs.google.com/presentation/d/1NDeNy7QdpNirilsnmPw_U5Rth-0u_yRCJIfrTOKhOcM/edit?usp=sharing

## Introduction to Web Sockets

According to MDN, "Web Sockets is an advanced technology that makes it possible to open an interactive communication session between the
user's browser and a server." Each individual connection between the client and server is called a socket. You can set up so that the
server can automatically send data to clients when there is new data.

## Why AJAX Sucks with Real Time Data

You have to keep sending GET AJAX request to the server to see if there is new information. You can set a timer to send an AJAX request,
but that would not be scalable. The design of AJAX request is not suited for real time data dependent application.

## Tools out there for Web Sockets

- Socket.io
- WS
- uWebSockets
- Total.js

## Resources

Chat APP From The Net Ninja:
https://www.youtube.com/playlist?list=PL4cUxeGkcC9i4V-_ZVwLmOusj8YAUhj_9

WebSockets MDN
https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
