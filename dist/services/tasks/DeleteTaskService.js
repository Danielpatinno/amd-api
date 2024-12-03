"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaskService = void 0;
// services/tasks/DeleteTaskService.ts
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class DeleteTaskService {
    async execute({ id }) {
        const deletedTask = await prisma.task.delete({
            where: { id },
        });
        return deletedTask;
    }
}
exports.DeleteTaskService = DeleteTaskService;
