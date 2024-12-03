"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
const DeleteUserService_1 = require("../../services/users/DeleteUserService");
class DeleteUserController {
    async handle(request, reply) {
        const { id } = request.params;
        const deleteUserService = new DeleteUserService_1.DeleteUserService();
        try {
            const response = await deleteUserService.execute(id);
            reply.status(200).send(response);
        }
        catch (error) {
            reply.status(400).send({ errors: [error.message] });
        }
    }
}
exports.DeleteUserController = DeleteUserController;
