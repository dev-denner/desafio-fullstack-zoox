import { ListCidadeController } from './ListCidadeController';
import { ListCidadeUseCase } from './ListCidadeUseCase';
import { MongoCidadeRepository } from '../../../repositories/implementations/MongoCidadeRepository';

const mongoCidadeRepository = new MongoCidadeRepository();
const listCidadeUseCase = new ListCidadeUseCase(mongoCidadeRepository);
const listCidadeController = new ListCidadeController(listCidadeUseCase);

export { listCidadeUseCase, listCidadeController }