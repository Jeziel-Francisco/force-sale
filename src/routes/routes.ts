import { Application, Request, Response } from "express";
import Context from "../middleware/context.middleware";

export const UserRoutes = (express: Application) => {
    express.route('/api/v1/user')
        .get((req: Request, res: Response) => {
            res.status(200).json({ get: 'OK' });
        })
        .post((req: Request, res: Response) => {
            res.status(200).json({ post: 'OK' });
        })
        .put((req: Request, res: Response) => {
            res.status(200).json({ put: 'OK' });
        })
        .delete((req: Request, res: Response) => {
            res.status(200).json({ delete: 'OK' });
        });
}
export const CompanyRoutes = (express: Application) => {
    express.route('/api/v1/company')
        .get((req: Request, res: Response) => {
            res.status(200).json({ get: 'OK' });
        })
        .post((req: Request, res: Response) => {
            res.status(200).json({ post: 'OK' });
        })
        .put((req: Request, res: Response) => {
            res.status(200).json({ put: 'OK' });
        })
        .delete((req: Request, res: Response) => {
            res.status(200).json({ delete: 'OK' });
        });
}