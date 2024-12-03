"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateTaskService {
    async execute({ title, priority, status, dateConclusion, activitys, userId }) {
        // Verifica se o usuário existe antes de criar a tarefa
        const userExists = await prisma_1.default.user.findUnique({
            where: { id: userId },
        });
        if (!userExists) {
            throw new Error('Usuário não encontrado');
        }
        // Cria a tarefa se o usuário existir
        const task = await prisma_1.default.task.create({
            data: {
                title,
                priority,
                dateConclusion,
                activitys,
                userId,
            },
        });
        return task;
    }
}
exports.CreateTaskService = CreateTaskService;
