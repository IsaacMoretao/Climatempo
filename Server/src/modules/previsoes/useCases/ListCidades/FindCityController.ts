import { Request, Response } from 'express';
import { FindCityUseCase } from './FindCityUseCase';

export class FindAllCityController {
  async handle(request: Request, response: Response) {
    const findCityUseCase = new FindCityUseCase();

    const previsoes = await findCityUseCase.execute();

    return response.json(previsoes);
  }
}