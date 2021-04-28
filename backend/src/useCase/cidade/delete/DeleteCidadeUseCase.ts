import { ICidadeRepository } from '../../../repositories/ICidadeRepository';


export class DeleteCidadeUseCase {

    constructor(
        private cidadeRepository: ICidadeRepository,
    ) { }

    execute(id: string) {
        return new Promise(resolve => {
            return this.cidadeRepository.delete(id, (error: any) => {
                if (error) {
                    throw new Error(error);
                }
                return resolve(null);
            });
        });
    }
}