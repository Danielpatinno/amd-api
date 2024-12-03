import prismaClient from '../../prisma'; 
import bcrypt from 'bcrypt'; 

interface LoginUserRequest {
  email: string;
  password: string;
}

class LoginUserService {
  async execute({ email, password }: LoginUserRequest) {
    const user = await prismaClient.user.findUnique({
      where: { email },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Credenciais inválidas');
    }

    return { id: user.id, email: user.email, name: user.name };
  }
}

export { LoginUserService };
