import { Request, Response } from "express";
import { UpdateEstadoUseCase } from "./UpdateEstadoUseCase";
import { mongoError, successResponse } from '../../../common/response';

export class UpdateEstadoController {
    constructor(
        private updateEstadoUseCase: UpdateEstadoUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, abreviacao, date_create } = request.body;
        const { id } = request.params;
        try {
            const result = await this.updateEstadoUseCase.execute({ _id: id, nome, abreviacao, date_create });
            return successResponse('Estado atualizado com sucesso!', result, response);
        } catch (error) {
            return mongoError(error, response);
        }
    }
}