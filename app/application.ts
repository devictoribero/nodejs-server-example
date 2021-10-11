import express, { Request, Response } from "express";
import cors from "cors";
import { routerExpenses } from "./routers/expenses";
import { routerReports } from "./routers/reports";

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
    this.server.use(this.basePath, routerReports);
    this.server.use(this.basePath, routerExpenses);

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
