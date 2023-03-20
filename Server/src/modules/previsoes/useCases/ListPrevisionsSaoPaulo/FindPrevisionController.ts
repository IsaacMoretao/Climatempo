import { Request, Response } from 'express';
import { FindPrevisionUseCase } from './FindPrevisionUseCase';

export class FindAllAvailableController {
  async handle(request: Request, response: Response) {
    const findPrevisionUseCase = new FindPrevisionUseCase();

    const previsoes = await findPrevisionUseCase.execute();

    return response.json(previsoes);
  }
}