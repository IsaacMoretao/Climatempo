import { prisma } from '../../../../database/prismaClient';

export class FindCityUseCase {
  async execute() {
    const city = await prisma.locality.findMany();

    return city;
  }
}