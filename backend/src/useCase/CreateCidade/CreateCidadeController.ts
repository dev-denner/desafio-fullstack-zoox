import { Request, Response } from "express";
import { CreateCidadeUseCase } from "./CreateCidadeUseCase";

export class CreateCidadeController {
    constructor(
        private createCidadeUseCase: CreateCidadeUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, estadoId } = request.body;
        try {
            await this.createCidadeUseCase.execute({ nome, estadoId });
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}