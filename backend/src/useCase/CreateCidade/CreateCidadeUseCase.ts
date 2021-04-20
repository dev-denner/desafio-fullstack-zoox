import { ICreateCidadeResquestDTO } from './CreateCidadeDTO';
import { ICidadeRepository } from '../../repositories/ICidadeRepository';
import { Cidade } from '../../entities/Cidade';

export class CreateCidadeUseCase {

    constructor(
        private CidadeRepository: ICidadeRepository,
    ) { }

    async execute(data: ICreateCidadeResquestDTO) {
        const cidadeAlreadyExists = await this.CidadeRepository.findByName(data.nome, data.estadoId);
        if (cidadeAlreadyExists) {
            throw new Error('Cidade already exists.')
        }
        const cidade = new Cidade(data);
        await this.CidadeRepository.save(cidade);
    }
}