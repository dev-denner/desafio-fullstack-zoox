import { Cidade } from '../entities/Cidade';

export interface ICidadeRepository {
    list(query: any, sort: string, callback: any);
    save(params: Cidade, callback: any);
    update(params: Cidade, callback: any);
    delete(id: String, callback: any);
}