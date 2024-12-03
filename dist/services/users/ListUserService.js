"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListUserService {
    async execute() {
        try {
            const users = await prisma_1.default.user.findMany();
            return users;
        }
        catch (error) {
            console.error("Erro ao buscar usuários:", error);
            throw new Error("Erro ao buscar usuários");
        }
    }
}
exports.ListUserService = ListUserService;
