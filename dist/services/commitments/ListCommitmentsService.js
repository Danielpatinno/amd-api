"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCommitmentsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListCommitmentsService {
    async execute(userId) {
        const commitments = await prisma_1.default.commitment.findMany({
            where: {
                userId: userId
            }
        });
        return commitments;
    }
}
exports.ListCommitmentsService = ListCommitmentsService;
