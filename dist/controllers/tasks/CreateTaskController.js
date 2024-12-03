"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskController = void 0;
const CreateTaskService_1 = require("../../services/tasks/CreateTaskService");
class CreateTaskController {
    constructor() {
        this.taskService = new CreateTaskService_1.CreateTaskService();
    }
    async handle(request, reply) {
        const { title, priority, status, dateConclusion, activitys, userId } = request.body;
        if (!title) {
            return reply.status(400).send({ error: 'Defina um título' });
        }
        if (!priority) {
            return reply.status(400).send({ error: 'Defina uma descrição' });
        }
        if (!userId) {
            return reply.status(400).send({ error: 'Defina um ID de usuário' });
        }
        try {
            const task = await this.taskService.execute({ title, priority, status, dateConclusion, activitys, userId });
            reply.status(201).send(task);
        }
        catch (error) {
            if (error.message === 'Usuário não encontrado') {
                return reply.status(404).send({ error: 'Usuário não encontrado' });
            }
            console.error('Erro ao criar tarefa:', error); // Loga o erro para análise
            reply.status(500).send({ error: 'Erro ao criar tarefa' });
        }
    }
}
exports.CreateTaskController = CreateTaskController;
