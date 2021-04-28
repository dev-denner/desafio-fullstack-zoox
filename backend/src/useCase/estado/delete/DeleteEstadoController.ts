import { Request, Response } from "express";
import { DeleteEstadoUseCase } from "./DeleteEstadoUseCase";
import { mongoError, successResponse } from '../../../common/response';

export class DeleteEstadoController {
    constructor(
        private deleteEstadoUseCase: DeleteEstadoUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        try {
            const result = await this.deleteEstadoUseCase.execute(id);
            return successResponse('Estado deletado com sucesso!', result, response);
        } catch (error) {
            return mongoError(error, response);
        }
    }
}