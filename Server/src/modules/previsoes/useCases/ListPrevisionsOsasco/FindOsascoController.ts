import { Request, Response } from 'express';
import { FindOsascoPrevisionUseCase } from './FindOsascoUseCase';

export class FindOsascoController {
  async handle(request: Request, response: Response) {
    const findOsascoPrevisionUseCase = new FindOsascoPrevisionUseCase();

    const previsoes = await findOsascoPrevisionUseCase.execute();

    return response.json(previsoes);
  }
}