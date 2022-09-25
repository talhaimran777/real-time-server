const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());

io.on("connection", (socket) => {
  socket.on("TYPING",  (text) => {
    console.log("Text comming from client", text);
    socket.emit("TYPING_BACK", text);
  });
});

app.get("/", (req, res) => res.send("Simple get request on route /"));

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
