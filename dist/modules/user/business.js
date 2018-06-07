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
const service_1 = require("./service");
const utils_1 = require("../../utils/utils");
class Business {
    constructor() { }
    findById(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield service_1.default.findById(id);
                utils_1.onSuccessResponse(res, data);
            }
            catch (error) {
                utils_1.onErrorResponse(res, error);
            }
        });
    }
    findByEmail(res, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield service_1.default.findByEmail(email);
                utils_1.onSuccessResponse(res, data);
            }
            catch (error) {
                utils_1.onErrorResponse(res, error);
            }
        });
    }
    create(res, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield service_1.default.create(model);
                utils_1.onSuccessResponse(res, data);
            }
            catch (error) {
                utils_1.onErrorResponse(res, error);
            }
        });
    }
    update(res, id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield service_1.default.update(id, model);
                utils_1.onSuccessResponse(res, data);
            }
            catch (error) {
                utils_1.onErrorResponse(res, error);
            }
        });
    }
    updatePassword(res, id, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield service_1.default.updatePassword(id, password);
                utils_1.onSuccessResponse(res, data);
            }
            catch (error) {
                utils_1.onErrorResponse(res, error);
            }
        });
    }
    remove(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield service_1.default.remove(id);
                utils_1.onSuccessResponse(res, data);
            }
            catch (error) {
                utils_1.onErrorResponse(res, error);
            }
        });
    }
}
exports.default = new Business();
