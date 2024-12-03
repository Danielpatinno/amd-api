"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commitmentsRoutes = commitmentsRoutes;
const CreateCommitmentsController_1 = require("../controllers/commitments/CreateCommitmentsController");
const ListCommitmentsController_1 = require("../controllers/commitments/ListCommitmentsController");
const DeleteCommitmentsController_1 = require("../controllers/commitments/DeleteCommitmentsController");
async function commitmentsRoutes(fastify, options) {
    fastify.get('/commitments/:userId', async (request, reply) => {
        return new ListCommitmentsController_1.ListCommitmentsController().handle(request, reply);
    });
    fastify.post('/createCommitments', async (request, reply) => {
        return new CreateCommitmentsController_1.CreateCommitmentsController().handle(request, reply);
    });
    fastify.delete('/deleteCommit/:id', async (request, reply) => {
        return new DeleteCommitmentsController_1.DeleteCommitmentController().handle(request, reply);
    });
}
