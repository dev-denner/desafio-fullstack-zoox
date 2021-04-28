import { CreateCidadeController } from './CreateCidadeController';
import { CreateCidadeUseCase } from './CreateCidadeUseCase';
import { MongoCidadeRepository } from '../../../repositories/implementations/MongoCidadeRepository';

const mongoCidadeRepository = new MongoCidadeRepository();
const createCidadeUseCase = new CreateCidadeUseCase(mongoCidadeRepository);
const createCidadeController = new CreateCidadeController(createCidadeUseCase);

export { createCidadeUseCase, createCidadeController }