"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskController = void 0;
const UpdateTaskService_1 = require("../../services/tasks/UpdateTaskService");
class UpdateTaskController {
    async handle(request, reply) {
        const { id } = request.query;
        const { priority, dateConclusion, status, activityIndex, newActivity } = request.body;
        const updateTaskService = new UpdateTaskService_1.UpdateTaskService();
        try {
            const updatedTask = await updateTaskService.execute({
                id,
                priority,
                dateConclusion,
                status,
                activityIndex,
                newActivity,
            });
            reply.status(200).send(updatedTask);
        }
        catch (error) {
            reply.status(400).send({ errors: [error.message] });
        }
    }
}
exports.UpdateTaskController = UpdateTaskController;
