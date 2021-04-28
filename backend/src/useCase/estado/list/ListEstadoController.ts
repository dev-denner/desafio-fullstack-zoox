import { Request, Response } from "express";
import { ListEstadoUseCase } from "./ListEstadoUseCase";
import { mongoError, successResponse } from '../../../common/response';

export class ListEstadoController {
    constructor(
        private listEstadoUseCase: ListEstadoUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const result = await this.listEstadoUseCase.execute(request);
            return successResponse('Listando Estados', result, response);
        } catch (error) {
            return mongoError(error, response);
        }
    }
}