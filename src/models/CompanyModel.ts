import * as Sequelize from 'sequelize';

import { IBaseModelInterface } from '../interfaces/BaseModelInterface';
import { IDbConnection } from '../interfaces/DbConnectionInterfaces';

export interface ICompanyAttributes {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface ICompanyInstance extends ICompanyAttributes, Sequelize.Instance<ICompanyAttributes> { }

export interface ICompanyModel extends IBaseModelInterface, Sequelize.Model<ICompanyInstance, ICompanyAttributes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ICompanyModel => {
    const Company: ICompanyModel = sequelize.define('Company', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
            tableName: 'companies'
        });

    Company.associate = (db: IDbConnection) => {
        db.Company.hasMany(db.User, {
            foreignKey: 'companyId'
        });
    }

    return Company;
}