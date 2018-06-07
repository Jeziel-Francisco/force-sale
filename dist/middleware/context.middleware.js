"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./../models");
class Context {
    constructor() { }
    setContext(req, res, next) {
        req['context'] = models_1.default;
        next();
    }
}
exports.default = new Context();
