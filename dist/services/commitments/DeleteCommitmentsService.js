"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommitmentService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class DeleteCommitmentService {
    async execute({ id }) {
        const deleteCommitment = await prisma.commitment.delete({
            where: { id }
        });
        return deleteCommitment;
    }
}
exports.DeleteCommitmentService = DeleteCommitmentService;
