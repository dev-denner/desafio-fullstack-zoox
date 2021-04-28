import { UpdateCidadeController } from './UpdateCidadeController';
import { UpdateCidadeUseCase } from './UpdateCidadeUseCase';
import { MongoCidadeRepository } from '../../../repositories/implementations/MongoCidadeRepository';

const mongoCidadeRepository = new MongoCidadeRepository();
const updateCidadeUseCase = new UpdateCidadeUseCase(mongoCidadeRepository);
const updateCidadeController = new UpdateCidadeController(updateCidadeUseCase);

export { updateCidadeUseCase, updateCidadeController }