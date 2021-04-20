import { ICreateEstadoResquestDTO } from './CreateEstadoDTO';
import { IEstadoRepository } from '../../repositories/IEstadoRepository';
import { Estado } from '../../entities/Estado';

export class CreateEstadoUseCase {

    constructor(
        private estadoRepository: IEstadoRepository,
    ) { }

    async execute(data: ICreateEstadoResquestDTO) {
        const estadoAlreadyExists = await this.estadoRepository.findByName(data.nome);
        if (estadoAlreadyExists) {
            throw new Error('Estado already exists.')
        }
        const estado = new Estado(data);
        await this.estadoRepository.save(estado);
    }
}