import { Request, Response } from "express";
import { ListCidadeUseCase } from "./ListCidadeUseCase";
import { mongoError, successResponse } from '../../../common/response';

export class ListCidadeController {
    constructor(
        private listCidadeUseCase: ListCidadeUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const result = await this.listCidadeUseCase.execute(request);
            return successResponse('Listando Cidades', result, response);
        } catch (error) {
            return mongoError(error, response);
        }
    }
}