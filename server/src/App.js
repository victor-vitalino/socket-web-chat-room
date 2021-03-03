import express from "express";
import http from "http";
import cors from "cors";
import router from "./router";

import Socket from "./Socket";

class App {
  constructor() {
    this.application = express();
    this.server = http.createServer(this.application);

    this.application.use(cors({ origin: "" }));

    this.sockets();
    this.routes();
  }

  sockets() {
    new Socket(this.server);
  }

  routes() {
    this.application.use(router);
  }
}

export default new App().server;
