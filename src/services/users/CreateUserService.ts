import { UserBody } from "../../controllers/users/CreateUserController";
import prismaClient from "../../prisma";
import bcrypt from 'bcrypt';

class CreateUserService {
  async execute({ name, email, password }: UserBody) {
    try {
      const existingUser = await prismaClient.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        throw new Error('Email já cadastrado.');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prismaClient.user.create({
        data: {
          name,
          email,
          password: hashedPassword, 
        },
      });

      return user;
    } catch (error) {
      console.error('Erro ao criar usuário no banco:', error);
      throw new Error('Erro ao criar usuário');
    }
  }
}

export { CreateUserService };
