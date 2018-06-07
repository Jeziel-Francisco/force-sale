import { Application, Request, Response } from "express";
import Context from "../middleware/context.middleware";
import UserController from './../modules/user/controller';

export const UserRoutes = (express: Application) => {
    express.route('/api/v1/user').post(UserController.create);
    express.route('/api/v1/user/:id')
        .get(UserController.findById)
        .put(UserController.update)
        .delete(UserController.remove);
}