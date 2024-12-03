"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (request, reply, done) => {
    const token = request.headers['authorization']?.split(' ')[1]; // Pega o token Bearer
    if (!token) {
        return reply.status(401).send({ message: 'Token is required' });
    }
    try {
        // Verifica o token e decodifica
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        // Adiciona o usuário ao request
        request.user = { id: decoded.id, email: decoded.email };
        // Passa para o próximo handler
        done();
    }
    catch (error) {
        return reply.status(401).send({ message: 'Invalid token' });
    }
};
exports.authMiddleware = authMiddleware;
