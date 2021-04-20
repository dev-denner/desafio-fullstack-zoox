import { Cidade } from '../../entities/Cidade';
import { ICidadeRepository } from '../ICidadeRepository';

export class MongoCidadeRepository implements ICidadeRepository {

    private cidades: Cidade[] = [];

    async findByName(nome: string): Promise<Cidade> {
        const cidade = this.cidades.find(cidade => cidade.nome === nome);
        return cidade;
    }

    async save(cidade: Cidade): Promise<void> {
        this.cidades.push(cidade);
    }
}