import { Request, Response } from "express";

export interface IController {
    findById?(req: Request, res: Response);
    create(req: Request, res: Response);
    update(req: Request, res: Response);
    remove(req: Request, res: Response);
}