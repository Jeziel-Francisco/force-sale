"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const routes_1 = require("./routes/routes");
class App {
    constructor() {
        this.express = express();
        this.middleware(this.express);
        this.routes(this.express);
    }
    middleware(express) {
        express.use(morgan('dev'));
    }
    routes(express) {
        routes_1.UserRoutes(express);
    }
}
exports.default = new App().express;
