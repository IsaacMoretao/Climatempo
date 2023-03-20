import { prisma } from '../../../../database/prismaClient';

export class FindPrevisionUseCase {
  async execute() {
    const previsoes = await prisma.previsoes.findMany({
      where: {
        local_id: {
          endsWith: 'clf9umw5e000006vozn5d0zti',
        },
      },
    });

    return previsoes;
  }
}