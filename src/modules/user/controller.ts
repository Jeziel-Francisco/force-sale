import Business from './business';

import { Request, Response } from 'express';

import { IController } from './../../interfaces/ControllerInterface';

class Controller implements IController {

    constructor() { }

    findById(req: Request, res: Response) {
        Business.findById(res, req.params.id);
    }

    findByEmail(req: Request, res: Response) {
        Business.findByEmail(res, req.body.email);
    }

    create(req: Request, res: Response) {
        Business.create(res, req.body);
    }

    update(req: Request, res: Response) {
        console.log(req.params.id);
        console.log(req.body);
        Business.update(res, req.params.id, req.body);
    }
    
    updatePassword(req: Request, res: Response) {
        Business.updatePassword(res, req.params.id, req.body.password);
    }
    
    remove(req: Request, res: Response) {
        Business.remove(res, req.params.id);
    }
}

export default new Controller();