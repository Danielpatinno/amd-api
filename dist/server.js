"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("@fastify/cors"));
const user_routes_1 = require("./routes/user.routes");
const task_routes_1 = require("./routes/task.routes");
const dotenv_1 = __importDefault(require("dotenv"));
const commitment_routes_1 = require("./routes/commitment.routes");
const app = (0, fastify_1.default)({ logger: true });
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
app.register(cors_1.default, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'Content-Type'],
});
app.register(user_routes_1.userRoutes);
app.register(task_routes_1.taskRoutes);
app.register(commitment_routes_1.commitmentsRoutes);
const start = async () => {
    try {
        await app.listen({ port: 3000 });
        console.log('Server is running on http://localhost:3000');
    }
    catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};
start();
