import * as Sequelize from "sequelize";

import { compareSync, hashSync, genSaltSync } from 'bcryptjs';

import { IBaseModelInterface } from "../interfaces/BaseModelInterface";
import { IDbConnection } from "../interfaces/DbConnectionInterfaces";

export interface IUserAttibutes {
    id?: number;
    companyId?: number;
    password?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface IUserInstance extends IUserAttibutes, Sequelize.Instance<IUserAttibutes> {
    isPassword(encodedPassword: string, password: string): boolean;
}

export interface IUserModel extends IBaseModelInterface, Sequelize.Model<IUserInstance, IUserAttibutes> { }

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): IUserModel => {
    const User: IUserModel = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 6,
                max: 128
            }
        },
        companyId: {
            type: DataTypes.INTEGER
        }
    }, {
            tableName: 'users',
            hooks: {
                beforeCreate: (user: IUserInstance, options: Sequelize.CreateOptions): void => {
                    const salt = genSaltSync();
                    user.password = hashSync(user.password, salt);
                },

                beforeUpdate: (user: IUserInstance, options: Sequelize.CreateOptions): void => {
                    if (user.changed('password')) {
                        const salt = genSaltSync();
                        user.password = hashSync(user.password, salt);
                    }
                }
            }
        });

    User.associate = (db: IDbConnection) => {
        db.User.belongsTo(db.Company, {
            foreignKey: 'companyId'
        });
    }

    User.prototype.isPassword = (encodedPassword: string, password: string): Boolean => {
        return compareSync(password, encodedPassword);
    }

    return User;
}