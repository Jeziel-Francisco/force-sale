"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const business_1 = require("./business");
class Controller {
    constructor() { }
    findById(req, res) {
        business_1.default.findById(res, req.params.id);
    }
    findByEmail(req, res) {
        business_1.default.findByEmail(res, req.body.email);
    }
    create(req, res) {
        business_1.default.create(res, req.body);
    }
    update(req, res) {
        console.log(req.params.id);
        console.log(req.body);
        business_1.default.update(res, req.params.id, req.body);
    }
    updatePassword(req, res) {
        business_1.default.updatePassword(res, req.params.id, req.body.password);
    }
    remove(req, res) {
        business_1.default.remove(res, req.params.id);
    }
}
exports.default = new Controller();
