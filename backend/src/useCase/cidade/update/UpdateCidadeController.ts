import { Request, Response } from "express";
import { UpdateCidadeUseCase } from "./UpdateCidadeUseCase";
import { mongoError, successResponse } from '../../../common/response';

export class UpdateCidadeController {
    constructor(
        private updateCidadeUseCase: UpdateCidadeUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, estado_id, date_create } = request.body;
        const { id } = request.params;
        try {
            const result = await this.updateCidadeUseCase.execute({ _id: id, nome, estado_id, date_create });
            return successResponse('Cidade atualizado com sucesso!', result, response);
        } catch (error) {
            return mongoError(error, response);
        }
    }
}