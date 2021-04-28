import { ICidadeRepository } from '../../../repositories/ICidadeRepository';
import { Request } from "express";

export class ListCidadeUseCase {

    constructor(
        private cidadeRepository: ICidadeRepository,
    ) { }

    execute(request: Request) {
        const { id } = request.params;
        let { nome, estado_id, sort } = request.query;
        let query: any = {};

        if (id) {
            query._id = id;
        }
        if (nome) {
            query.nome = nome;
        }
        if (estado_id) {
            query.estado_id = estado_id;
        }
        sort = !sort ? 'nome' : sort;

        return new Promise(resolve => {
            return this.cidadeRepository.list(query, sort + '', (error: any, result) => {
                if (error) {
                    throw new Error(error);
                }
                return resolve(result);
            });
        });
    }
}