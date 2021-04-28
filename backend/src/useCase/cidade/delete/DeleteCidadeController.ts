import { Request, Response } from "express";
import { DeleteCidadeUseCase } from "./DeleteCidadeUseCase";
import { mongoError, successResponse } from '../../../common/response';

export class DeleteCidadeController {
    constructor(
        private deleteCidadeUseCase: DeleteCidadeUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        try {
            const result = await this.deleteCidadeUseCase.execute(id);
            return successResponse('Cidade deletado com sucesso!', result, response);
        } catch (error) {
            return mongoError(error, response);
        }
    }
}