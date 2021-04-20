import { Estado } from '../../entities/Estado';
import { IEstadoRepository } from '../IEstadoRepository';

export class MongoEstadoRepository implements IEstadoRepository {

    private estados: Estado[] = [];

    async findByName(nome: string): Promise<Estado> {
        const estado = this.estados.find(estado => estado.nome === nome);
        return estado;
    }

    async save(estado: Estado): Promise<void> {
        this.estados.push(estado);
    }
}