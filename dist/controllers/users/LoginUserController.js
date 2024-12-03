"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserController = void 0;
const LoginUserService_1 = require("../../services/users/LoginUserService");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginUserController {
    constructor(loginService = new LoginUserService_1.LoginUserService()) {
        this.loginService = loginService;
    }
    async handle(request, reply) {
        const { email, password } = request.body;
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return reply.status(400).send({ error: 'Email inválido' });
        }
        if (!password) {
            return reply.status(400).send({ error: 'Defina uma senha' });
        }
        try {
            const user = await this.loginService.execute({ email, password });
            if (!user) {
                return reply.status(401).send({ error: 'Credenciais inválidas' });
            }
            const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '10d' });
            reply.status(200).send({ user, token });
        }
        catch (error) {
            console.error('Erro ao fazer login:', error);
            reply.status(500).send({ error: 'Credenciais inválidas' });
        }
    }
}
exports.LoginUserController = LoginUserController;
