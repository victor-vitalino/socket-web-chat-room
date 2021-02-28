import express from "express";
import http from "http";
import socketio from "socket.io";
import cors from "cors";
import router from "./router";

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

      socket.on("join", ({ user, room }) => {
        console.log("new user join", user, room);
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
