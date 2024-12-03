"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRoutes = taskRoutes;
const CreateTaskController_1 = require("../controllers/tasks/CreateTaskController");
const ListTaskController_1 = require("../controllers/tasks/ListTaskController");
const DeleteTaskController_1 = require("../controllers/tasks/DeleteTaskController");
const UpdateTaskController_1 = require("../controllers/tasks/UpdateTaskController");
async function taskRoutes(fastify, options) {
    fastify.get('/tasks/:userId', async (request, reply) => {
        return new ListTaskController_1.ListTasksController().handle(request, reply);
    });
    fastify.post('/createTask', async (request, reply) => {
        return new CreateTaskController_1.CreateTaskController().handle(request, reply);
    });
    fastify.put('/updateTask', async (request, reply) => {
        return new UpdateTaskController_1.UpdateTaskController().handle(request, reply);
    });
    fastify.delete('/deleteTask/:id', async (request, reply) => {
        return new DeleteTaskController_1.DeleteTaskController().handle(request, reply);
    });
}
