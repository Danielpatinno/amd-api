"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksController = void 0;
const ListTaskService_1 = require("../../services/tasks/ListTaskService");
class ListTasksController {
    async handle(request, reply) {
        const { userId } = request.params;
        if (!userId) {
            return reply.status(400).send({ error: 'User ID is required' });
        }
        const listTasksService = new ListTaskService_1.ListTasksService();
        try {
            const tasks = await listTasksService.execute(userId);
            return reply.status(200).send(tasks);
        }
        catch (error) {
            return reply.status(500).send({ error: 'Error fetching tasks' });
        }
    }
}
exports.ListTasksController = ListTasksController;
