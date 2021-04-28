import { IUpdateEstadoResquestDTO } from './UpdateEstadoDTO';
import { IEstadoRepository } from '../../../repositories/IEstadoRepository';
import { Estado } from '../../../entities/Estado';


export class UpdateEstadoUseCase {

    constructor(
        private estadoRepository: IEstadoRepository,
    ) { }

    execute(data: IUpdateEstadoResquestDTO) {
        const estado = new Estado(data, data._id);
        return new Promise(resolve => {
            return this.estadoRepository.update(estado, (error: any, data: Estado) => {
                if (error) {
                    throw new Error(error);
                }
                return resolve(data);
            });
        });
    }
}