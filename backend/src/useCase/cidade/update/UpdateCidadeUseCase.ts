import { IUpdateCidadeResquestDTO } from './UpdateCidadeDTO';
import { ICidadeRepository } from '../../../repositories/ICidadeRepository';
import { Cidade } from '../../../entities/Cidade';


export class UpdateCidadeUseCase {

    constructor(
        private cidadeRepository: ICidadeRepository,
    ) { }

    execute(data: IUpdateCidadeResquestDTO) {
        const cidade = new Cidade(data, data._id);
        return new Promise(resolve => {
            return this.cidadeRepository.update(cidade, (error: any, data: Cidade) => {
                if (error) {
                    throw new Error(error);
                }
                return resolve(data);
            });
        });
    }
}