import { ICreateCidadeResquestDTO } from './CreateCidadeDTO';
import { ICidadeRepository } from '../../../repositories/ICidadeRepository';
import { Cidade } from '../../../entities/Cidade';

export class CreateCidadeUseCase {

    constructor(
        private cidadeRepository: ICidadeRepository,
    ) { }

    async execute(data: ICreateCidadeResquestDTO) {
        const estado = new Cidade(data);
        return await new Promise(resolve => {
            return this.cidadeRepository.save(estado, (error: any, data: Cidade) => { 
                if (error) {
                    throw new Error(error);
                }
                return resolve(data);
            });
        });
    }
}