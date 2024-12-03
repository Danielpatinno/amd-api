"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCommitmentsController = void 0;
const ListCommitmentsService_1 = require("../../services/commitments/ListCommitmentsService");
class ListCommitmentsController {
    async handle(request, reply) {
        const { userId } = request.params;
        if (!userId) {
            return reply.status(400).send({ error: 'User ID is required' });
        }
        const listCommitmentsService = new ListCommitmentsService_1.ListCommitmentsService();
        try {
            const commitments = await listCommitmentsService.execute(userId);
            return reply.status(200).send(commitments);
        }
        catch (error) {
            return reply.status(500).send({ error: 'Error fetching commitments' });
        }
    }
}
exports.ListCommitmentsController = ListCommitmentsController;
