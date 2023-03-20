import { prisma } from '../../../../database/prismaClient';

export class FindOsascoPrevisionUseCase {
  async execute() {
    const previsoes = await prisma.previsoes.findMany({
      where: {
        local_id: {
          endsWith: 'clf9umwy8000606vok7iw9zi3',
        },
      },
    });

    return previsoes;
  }
}