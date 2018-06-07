"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./../../models");
class Service {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.default.User.findById(id);
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.default.User.findOne({ where: { email: email } });
        });
    }
    create(model) {
        return __awaiter(this, void 0, void 0, function* () {
            let T = yield models_1.default.sequelize.transaction();
            return yield models_1.default.User.create(model, { transaction: T });
        });
    }
    update(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield models_1.default.User.findById(id);
            if (!user)
                throw new Error('Id not found');
            let T = yield models_1.default.sequelize.transaction();
            return yield user.update(model, { transaction: T });
        });
    }
    updatePassword(id, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield models_1.default.User.findById(id);
            if (!user)
                throw new Error('Id not found');
            let T = yield models_1.default.sequelize.transaction();
            yield user.update({ password: password }, { transaction: T });
            return true;
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield models_1.default.User.findById(id);
            if (!user)
                throw new Error('Id not found');
            let T = yield models_1.default.sequelize.transaction();
            return yield user.destroy({ transaction: T });
        });
    }
}
exports.default = new Service();
