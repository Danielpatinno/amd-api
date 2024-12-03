"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = userRoutes;
const CreateUserController_1 = require("../controllers/users/CreateUserController");
const LoginUserController_1 = require("../controllers/users/LoginUserController");
const ListUserController_1 = require("../controllers/users/ListUserController");
const UpdateUserController_1 = require("../controllers/users/UpdateUserController");
const DeleteUserController_1 = require("../controllers/users/DeleteUserController");
async function userRoutes(fastify, options) {
    fastify.post('/createUser', async (request, reply) => {
        return new CreateUserController_1.CreateUserController().handle(request, reply);
    });
    // fastify.get('/me', { preHandler: authMiddleware }, getUserProfile);
    fastify.post('/login', async (request, reply) => {
        return new LoginUserController_1.LoginUserController().handle(request, reply);
    });
    fastify.put('/updateUser/:id', async (request, reply) => {
        return new UpdateUserController_1.UpdateUserController().handle(request, reply);
    });
    fastify.get('/users', async (request, reply) => {
        return new ListUserController_1.ListUserController().handle(request, reply);
    });
    fastify.delete('/deleteUser/:id', async (request, reply) => {
        return new DeleteUserController_1.DeleteUserController().handle(request, reply);
    });
}
