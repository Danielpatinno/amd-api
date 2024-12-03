"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
const UpdateTaskService_1 = require("../../services/users/UpdateTaskService");
class UpdateUserController {
    async handle(request, // Tipagem explícita de Params e Body
    reply) {
        const { id } = request.params;
        const { name, password } = request.body;
        const updateUserService = new UpdateTaskService_1.UpdateUserService();
        try {
            const updatedUser = await updateUserService.execute({
                id,
                name,
                password,
            });
            reply.status(200).send(updatedUser);
        }
        catch (error) {
            reply.status(400).send({ errors: [error.message] });
        }
    }
}
exports.UpdateUserController = UpdateUserController;
