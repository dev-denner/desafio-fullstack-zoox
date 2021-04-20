import { Estado } from "../entities/Estado";

export interface IEstadoRepository {
    findByName(nome: string): Promise<Estado>;
    save(estado: Estado): Promise<void>;
}