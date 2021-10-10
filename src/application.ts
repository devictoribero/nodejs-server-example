import express from "express";
import cors from "cors";

interface RunnableApplication {
  setup(): void;
  start(): void;
}

export class Application implements RunnableApplication {
  private server: express.Application;
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

    this.server.get(`${this.basePath}/log`, (req, res) => {
      res.send({ log: "hello log" });
    });

    return this;
  }

  setup() {
    this.applyMiddlewares().configureRoutes();
  }

  // todo add type for function response
  applyMiddlewares() {
    // Parse all incoming request to JSON
    this.server.use(express.json());

    // Allows CORS
    this.server.use(cors());

    return this;
  }

  start() {
    this.setup();

    this.server.listen(this.port);
  }
}

module.exports = { Application };
