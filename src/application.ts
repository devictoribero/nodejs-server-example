import express from "express";
import cors from "cors";
import { routerExpenses } from "./routers/expenses";

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

    this.server.use(this.basePath, routerExpenses);

    this.server.get(`${this.basePath}/log/:text`, (req, res) => {
      const { text } = req.params;
      res.json(`hello ${text}`);
    });

    this.server.get(`${this.basePath}/download`, (req, res) => {
      res.download(`public/download.txt`, (error) => {
        if (error) {
          res.status(404).end();
        }
      });
    });

    this.server.post(`${this.basePath}/mirror`, (req, res) => {
      res.send(req.body);
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

    // Enables URL data encoded
    this.server.use(express.urlencoded({ extended: false }));

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
