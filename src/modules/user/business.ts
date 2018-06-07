import Service from "./service";


import { IBusiness } from "../../interfaces/BusinessInterface";
import { IUserAttibutes } from "../../models/UserModel";

import { Response } from "express";

import { onSuccessResponse, onErrorResponse } from "../../utils/utils";

class Business implements IBusiness<IUserAttibutes>{
    constructor() { }

    async findById(res: Response, id: number) {
        try {
            let data = await Service.findById(id);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
    async findByEmail(res: Response, email: string) {
        try {
            let data = await Service.findByEmail(email);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
    async create(res: Response, model: IUserAttibutes) {
        try {
            let data = await Service.create(model);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
    async update(res: Response, id: number, model: IUserAttibutes) {
        try {
            let data = await Service.update(id, model);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
    async updatePassword(res: Response, id: number, password: string) {
        try {
            let data = await Service.updatePassword(id, password);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
    async remove(res: Response, id: number) {
        try {
            let data = await Service.remove(id);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }
}


export default new Business();