"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListTasksService {
    async execute(userId) {
        const tasks = await prisma_1.default.task.findMany({
            where: {
                userId: userId
            }
        });
        return tasks;
    }
}
exports.ListTasksService = ListTasksService;
