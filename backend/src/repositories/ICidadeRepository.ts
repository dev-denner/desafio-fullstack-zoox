import { Cidade } from "../entities/Cidade";

export interface ICidadeRepository {
    findByName(nome: string, idEstado: string): Promise<Cidade>;
    save(cidade: Cidade): Promise<void>;
}