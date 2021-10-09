import express from "express";

interface RunnableApplication {
  setup(): void;
  start(): void;
}

export class Application implements RunnableApplication {
  private server;
  private readonly port: number;
  private readonly basePath;

  constructor({ port }: { port: number }) {
    this.server = express();
    this.port = port;
    this.basePath = `/api`;
  }

  private configureRoutes() {
    this.server.get(`${this.basePath}/users`, (req, res) => {
      res.send({ users: [] });
    });
  }

  setup() {
    this.configureRoutes();
  }

  start() {
    this.setup();

    this.server.listen(this.port);
  }
}

module.exports = { Application };
