import { Request, Response } from "express";
import { CreateEstadoUseCase } from "./CreateEstadoUseCase";

export class CreateEstadoController {
    constructor(
        private createEstadoUseCase: CreateEstadoUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, abreviacao } = request.body;
        try {
            await this.createEstadoUseCase.execute({ nome, abreviacao });
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}