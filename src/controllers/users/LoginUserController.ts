import { FastifyRequest, FastifyReply } from 'fastify';
import { LoginUserService } from '../../services/users/LoginUserService';
import jwt from 'jsonwebtoken';

export interface LoginBody {
  email: string;
  password: string;
}

class LoginUserController {
  private loginService: LoginUserService;

  constructor(loginService: LoginUserService = new LoginUserService()) {
    this.loginService = loginService;
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = request.body as LoginBody;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return reply.status(400).send({ error: 'Email inválido' });
    }

    if (!password) {
      return reply.status(400).send({ error: 'Defina uma senha' });
    }

    try {
      const user = await this.loginService.execute({ email, password });

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET as string,
        { expiresIn: '10d' }
      );

      reply.status(200).send({ user, token });
    } catch (error: any) {
      console.error('Erro ao fazer login:', error);

      if (error.message === 'Credenciais inválidas') {
        return reply.status(401).send({ error: 'Credenciais inválidas' });
      }

      return reply.status(500).send({ error: 'Erro ao processar a solicitação' });
    }
  }
}

export { LoginUserController };

