const express = require("express");

class Application {
  constructor({ port }) {
    this.server = express();
    this.port = port;
    this.basePath = `/api`;
  }

  setup() {
    this.server.get(`${this.basePath}/users`, (req, res) => {
      res.send({ users: [] });
    });
  }

  start() {
    this.setup();

    this.server.listen(this.port, () => {
      console.log(`Server listening on port: ${this.port}`);
    });
  }
}

module.exports = { Application };
