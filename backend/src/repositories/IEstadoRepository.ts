import { Estado } from "../entities/Estado";

export interface IEstadoRepository {
    list(query: any, sort: string, callback: any);
    save(params: Estado, callback: any);
    update(params: Estado, callback: any);
    delete(id: String, callback: any);
}