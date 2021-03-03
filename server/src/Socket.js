import socketio from "socket.io";
import User from "./users";

class Socket {
  #server;
  #io;
  socket;

  constructor(server) {
    this.#server = server;
    this.#io = socketio(this.#server, { cors: { origin: "*" } });
    this.init();
  }

  init() {
    this.#io.on("connection", (socket) => {
      this.socket = (socket) => socket;

      console.log("we have new connection");

      socket.on("join", ({ name, room }, callback) => {
        return this.join({ name, room }, callback, socket);
      });

      socket.on("sendMessage", (message, callback) => {
        return this.sendMessage(message, callback, socket);
      });

      socket.on("disconect", (callback) => this.disconnect(callback, socket));
    });
  }

  join({ name, room }, callback, socket) {
    const { error, user } = User.addUser({ id: socket.id, name, room });

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
  }
  sendMessage(message, callback, socket) {
    const user = User.getUser(socket.id);

    console.log("sendMesage", user, message);
    this.#io.to(user.room).emit("message", { user: user.name, text: message });
    callback();
  }
  disconnect(callback) {
    console.log("user has disconect");
    callback();
  }
}

export default Socket;
