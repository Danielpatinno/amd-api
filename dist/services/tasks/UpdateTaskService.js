"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateTaskService {
    async execute({ id, priority, dateConclusion, status, activityIndex, newActivity, }) {
        if (!id) {
            throw new Error("ID da tarefa é necessário.");
        }
        const task = await prisma_1.default.task.findUnique({
            where: { id },
        });
        if (!task) {
            throw new Error("Tarefa não encontrada.");
        }
        if (task.activitys) {
            if (activityIndex !== undefined) {
                if (newActivity) {
                    if (activityIndex >= 0 && activityIndex < task.activitys.length) {
                        task.activitys[activityIndex] = newActivity;
                    }
                    else {
                        throw new Error("Índice da atividade inválido.");
                    }
                }
                else {
                    if (activityIndex >= 0 && activityIndex < task.activitys.length) {
                        task.activitys.splice(activityIndex, 1);
                    }
                    else {
                        throw new Error("Índice da atividade inválido para remoção.");
                    }
                }
            }
            else if (newActivity) {
                task.activitys.push(newActivity);
            }
        }
        const updatedTask = await prisma_1.default.task.update({
            where: { id },
            data: {
                priority: priority ?? task.priority,
                dateConclusion: dateConclusion ?? task.dateConclusion,
                status: status ?? task.status,
                activitys: task.activitys,
            },
        });
        return updatedTask;
    }
}
exports.UpdateTaskService = UpdateTaskService;
