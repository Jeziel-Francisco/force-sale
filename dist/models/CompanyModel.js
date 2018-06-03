"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        tableName: 'companies'
    });
    Company.associate = (db) => {
        db.Company.hasMany(db.User, {
            foreignKey: 'companyId'
        });
    };
    return Company;
};
