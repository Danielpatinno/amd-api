"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTaskService = void 0;
// services/tasks/FindTaskService.ts
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class FindTaskService {
    async execute({ id }) {
        // Busca a tarefa pelo ID no banco de dados
        const task = await prisma.task.findUnique({
            where: { id },
        });
        return task;
    }
}
exports.FindTaskService = FindTaskService;
