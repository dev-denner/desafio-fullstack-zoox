import { Request, Response } from "express";
import { CreateCidadeUseCase } from "./CreateCidadeUseCase";
import { mongoError, successResponse } from '../../../common/response';

export class CreateCidadeController {
    constructor(
        private createCidadeUseCase: CreateCidadeUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, estado_id } = request.body;
        try {
            const result = await this.createCidadeUseCase.execute({ nome, estado_id });
            return successResponse('Cidade cadastrado com sucesso!', result, response);
        } catch (error) {
            return mongoError(error, response);
        }
    }
}