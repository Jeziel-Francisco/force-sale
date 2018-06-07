import { IService } from "../../interfaces/ServiceInterface";
import { IUserAttibutes, IUserInstance } from "../../models/UserModel";

import db from './../../models';
import { Transaction } from "sequelize";

class Service implements IService<IUserAttibutes> {
    async findById(id: number) {
        return await db.User.findById(id as number);
    }
    async findByEmail(email: string) {
        return await db.User.findOne({ where: { email: email } });
    }

    async create(model: IUserAttibutes) {
        let T: Transaction = await db.sequelize.transaction();
        return await db.User.create(model, { transaction: T });
    }

    async update(id: number, model: IUserAttibutes) {
        let user: IUserInstance = await db.User.findById(id);

        if (!user) throw new Error('Id not found');

        let T: Transaction = await db.sequelize.transaction();
        return await user.update(model, { transaction: T });
    }

    async updatePassword(id: number, password: string) {
        let user: IUserInstance = await db.User.findById(id);

        if (!user) throw new Error('Id not found');

        let T: Transaction = await db.sequelize.transaction();

        await user.update({ password: password }, { transaction: T });
        return true;
    }

    async remove(id: number) {
        let user: IUserInstance = await db.User.findById(id);

        if (!user) throw new Error('Id not found');

        let T: Transaction = await db.sequelize.transaction();
        return await user.destroy({ transaction: T });
    }
}

export default new Service();