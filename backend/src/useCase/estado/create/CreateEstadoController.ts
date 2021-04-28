import { Request, Response } from "express";
import { CreateEstadoUseCase } from "./CreateEstadoUseCase";
import { mongoError, successResponse } from '../../../common/response';

export class CreateEstadoController {
    constructor(
        private createEstadoUseCase: CreateEstadoUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, abreviacao } = request.body;
        try {
            const result = await this.createEstadoUseCase.execute({ nome, abreviacao });
            return successResponse('Estado cadastrado com sucesso!', result, response);
        } catch (error) {
            return mongoError(error, response);
        }
    }
}