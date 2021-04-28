import { DeleteCidadeController } from './DeleteCidadeController';
import { DeleteCidadeUseCase } from './DeleteCidadeUseCase';
import { MongoCidadeRepository } from '../../../repositories/implementations/MongoCidadeRepository';

const mongoCidadeRepository = new MongoCidadeRepository();
const deleteCidadeUseCase = new DeleteCidadeUseCase(mongoCidadeRepository);
const deleteCidadeController = new DeleteCidadeController(deleteCidadeUseCase);

export { deleteCidadeUseCase, deleteCidadeController }