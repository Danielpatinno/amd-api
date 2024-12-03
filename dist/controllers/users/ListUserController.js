"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserController = void 0;
const ListUserService_1 = require("../../services/users/ListUserService");
class ListUserController {
    async handle(request, reply) {
        const listUserService = new ListUserService_1.ListUserService();
        const users = await listUserService.execute();
        return users;
    }
}
exports.ListUserController = ListUserController;
