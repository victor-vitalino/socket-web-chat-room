import express from "express";
import http from "http";
import socketio from "socket.io";
import cors from "cors";
import router from "./router";

import { addUser, removeUser, getUser, getUsersInRoom } from "./users";

class App {
  constructor() {
    this.application = express();
    this.server = http.createServer(this.application);
    this.io = socketio(this.server, { cors: { origin: "*" } });

    this.application.use(cors({ origin: "" }));

    this.sockets();
    this.routes();
  }

  sockets() {
    this.io.on("connection", (socket) => {
      console.log("we have new connection");

      socket.on("join", ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        console.log(user);
        if (error) return callback(error);

        // tell "welcome" to user
        socket.emit("message", {
          user: "admin",
          text: `${user.name}, welcome to the room ${user.room}`,
        });
        //tell to other users that another user has entered the room
        socket.broadcast
          .to(user.room)
          .emit("message", { user: "admin", text: `${user.name}, has joined` });
        socket.join(user.room);

        callback();
      });

      socket.on("sendMessage", (message, callback) => {
        const user = getUser(socket.id);

        console.log("sendMesage", user, message);
        this.io
          .to(user.room)
          .emit("message", { user: user.name, text: message });
        callback();
      });

      socket.on("disconect", () => {
        console.log("user has disconect");
      });
    });
  }

  routes() {
    this.application.use(router);
  }
}

export default new App().server;
