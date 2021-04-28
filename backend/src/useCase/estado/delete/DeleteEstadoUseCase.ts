import { IEstadoRepository } from '../../../repositories/IEstadoRepository';


export class DeleteEstadoUseCase {

    constructor(
        private estadoRepository: IEstadoRepository,
    ) { }

    execute(id: string) {
        return new Promise(resolve => {
            return this.estadoRepository.delete(id, (error: any) => {
                if (error) {
                    throw new Error(error);
                }
                return resolve(null);
            });
        });
    }
}