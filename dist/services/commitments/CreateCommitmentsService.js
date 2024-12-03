"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommitmentsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateCommitmentsService {
    async execute({ title, dateConclusion, userId }) {
        const userExists = await prisma_1.default.user.findUnique({
            where: { id: userId },
        });
        if (!userExists) {
            throw new Error('Usuário não encontrado');
        }
        const commitment = await prisma_1.default.commitment.create({
            data: {
                title,
                dateConclusion,
                userId
            }
        });
        return commitment;
    }
}
exports.CreateCommitmentsService = CreateCommitmentsService;
