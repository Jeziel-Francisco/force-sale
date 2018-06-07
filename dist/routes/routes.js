"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./../modules/user/controller");
exports.UserRoutes = (express) => {
    express.route('/api/v1/user').post(controller_1.default.create);
    express.route('/api/v1/user/:id')
        .get(controller_1.default.findById)
        .put(controller_1.default.update)
        .delete(controller_1.default.remove);
};
