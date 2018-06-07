import { Response } from 'express';

export interface IBusiness<T> {
    findById?(res: Response, id: number);
    create(res: Response, model: T);
    update(res: Response, id: number, model: T);
    remove(res: Response, id: number);
}