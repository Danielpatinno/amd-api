"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommitmentController = void 0;
const DeleteCommitmentsService_1 = require("../../services/commitments/DeleteCommitmentsService");
class DeleteCommitmentController {
    async handle(request, reply) {
        const { id } = request.params;
        if (!id) {
            return reply.status(400).send({ message: "ID is required" });
        }
        const commitmentService = new DeleteCommitmentsService_1.DeleteCommitmentService();
        try {
            await commitmentService.execute({ id });
            reply.status(204).send();
        }
        catch (error) {
            console.error('Error while deleting task:', error);
            reply.status(500).send({ message: 'An error occurred while deleting the task' });
        }
    }
}
exports.DeleteCommitmentController = DeleteCommitmentController;
