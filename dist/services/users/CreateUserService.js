"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class CreateUserService {
    async execute({ name, email, password }) {
        try {
            // Gera o hash da senha para armazená-la de forma segura
            const hashedPassword = await bcrypt_1.default.hash(password, 10);
            // Cria um novo usuário no banco de dados com a senha hash
            const user = await prisma_1.default.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword, // Armazena a senha hash em vez de texto simples
                },
            });
            return user;
        }
        catch (error) {
            // Lida com erros específicos do Prisma
            if (error.code === 'P2002' && error.meta?.target.includes('email')) {
                // Verifica se o erro é de e-mail duplicado
                throw new Error('Email já cadastrado.');
            }
            console.error('Erro ao criar usuário no banco:', error); // Loga o erro para análise
            throw new Error('Erro ao criar usuário');
        }
    }
}
exports.CreateUserService = CreateUserService;
