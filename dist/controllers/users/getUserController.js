"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfile = void 0;
const getUserProfile = async (request, reply) => {
    const user = request.user;
    if (!user) {
        return reply.status(401).send({ message: 'User not authenticated' });
    }
    return reply.send({ user });
};
exports.getUserProfile = getUserProfile;
