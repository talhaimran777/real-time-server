import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_ORIGIN
  }
});

io.on("connection", (socket) => {
  console.log(socket.id);
});

app.get("/", (req, res) => res.send("Simple get request on route /"));

const PORT = 8000;

httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});