"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const express_1 = __importDefault(require("express"));
class Application {
    constructor({ port }) {
        this.server = (0, express_1.default)();
        this.port = port;
        this.basePath = `/api`;
    }
    configureRoutes() {
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
exports.Application = Application;
module.exports = { Application };
//# sourceMappingURL=application.js.map