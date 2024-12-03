"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommitmentsController = void 0;
const CreateCommitmentsService_1 = require("../../services/commitments/CreateCommitmentsService");
class CreateCommitmentsController {
    constructor() {
        this.commitmentsService = new CreateCommitmentsService_1.CreateCommitmentsService();
    }
    async handle(request, reply) {
        const { title, dateConclusion, userId } = request.body;
        if (!title) {
            return reply.status(400).send({ error: 'Defina um título' });
        }
        if (!userId) {
            return reply.status(400).send({ error: 'Defina um ID de usuário' });
        }
        try {
            const commitments = await this.commitmentsService.execute({ title, dateConclusion, userId });
            reply.status(201).send(commitments);
        }
        catch (error) {
            if (error.message === 'Usuário não encontrado') {
                return reply.status(404).send({ error: 'Usuário não encontrado' });
            }
            console.error('Erro ao criar tarefa:', error); // Loga o erro para análise
            reply.status(500).send({ error: 'Erro ao criar tarefa' });
        }
    }
}
exports.CreateCommitmentsController = CreateCommitmentsController;
