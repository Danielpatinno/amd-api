"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaskController = void 0;
const DeleteTaskService_1 = require("../../services/tasks/DeleteTaskService");
class DeleteTaskController {
    async handle(request, reply) {
        const { id } = request.params;
        if (!id) {
            return reply.status(400).send({ message: 'ID is required' });
        }
        const taskService = new DeleteTaskService_1.DeleteTaskService();
        try {
            await taskService.execute({ id });
            reply.status(204).send();
        }
        catch (error) {
            console.error('Error while deleting task:', error);
            reply.status(500).send({ message: 'An error occurred while deleting the task' });
        }
    }
}
exports.DeleteTaskController = DeleteTaskController;
