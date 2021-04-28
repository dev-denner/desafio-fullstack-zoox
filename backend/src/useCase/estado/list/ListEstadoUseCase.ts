import { IEstadoRepository } from '../../../repositories/IEstadoRepository';
import { Request } from "express";

export class ListEstadoUseCase {

    constructor(
        private estadoRepository: IEstadoRepository,
    ) { }

    execute(request: Request) {
        const { id } = request.params;
        let { nome, abreviacao, sort } = request.query;
        let query: any = {};

        if (id) {
            query._id = id;
        }
        if (nome) {
            query.nome = nome;
        }
        if (abreviacao) {
            query.abreviacao = abreviacao;
        }
        sort = !sort ? 'nome' : sort;

        return new Promise(resolve => {
            return this.estadoRepository.list(query, sort + '', (error: any, result) => {
                if (error) {
                    throw new Error(error);
                }
                return resolve(result);
            });
        });
    }
}