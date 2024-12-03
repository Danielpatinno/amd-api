"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeleteUserService {
    async execute(id) {
        const user = await prisma_1.default.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }
        await prisma_1.default.user.delete({
            where: { id },
        });
        return { message: "Usuário excluído com sucesso." };
    }
}
exports.DeleteUserService = DeleteUserService;