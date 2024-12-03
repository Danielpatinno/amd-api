"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UpdateUserService {
    async execute({ id, name, password }) {
        const user = await prisma_1.default.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }
        // Validação para garantir que 'name' ou 'password' sejam preenchidos, se não, apenas o campo presente será atualizado
        if (name === undefined && password === undefined) {
            throw new Error("Pelo menos um dos campos 'name' ou 'password' deve ser fornecido.");
        }
        // Atualizando o nome, caso o 'name' tenha sido fornecido
        if (name) {
            user.name = name;
        }
        // Se o password foi fornecido, faz o hash e atualiza
        if (password) {
            const hashedPassword = await bcrypt_1.default.hash(password, 10);
            user.password = hashedPassword;
        }
        // Atualiza o usuário no banco de dados
        const updatedUser = await prisma_1.default.user.update({
            where: { id },
            data: {
                name: user.name,
                password: user.password,
            },
        });
        return updatedUser;
    }
}
exports.UpdateUserService = UpdateUserService;
