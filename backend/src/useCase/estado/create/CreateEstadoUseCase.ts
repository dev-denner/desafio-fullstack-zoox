import { ICreateEstadoResquestDTO } from './CreateEstadoDTO';
import { IEstadoRepository } from '../../../repositories/IEstadoRepository';
import { Estado } from '../../../entities/Estado';


export class CreateEstadoUseCase {

    constructor(
        private estadoRepository: IEstadoRepository,
    ) { }

    execute(data: ICreateEstadoResquestDTO) {
        const estado = new Estado(data);
        return new Promise(resolve => {
            return this.estadoRepository.save(estado, (error: any, data: Estado) => {
                if (error) {
                    throw new Error(error);
                }
                return resolve(data);
            });
        });
    }
}