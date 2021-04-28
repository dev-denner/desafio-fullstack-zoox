import { ListEstadoController } from './ListEstadoController';
import { ListEstadoUseCase } from './ListEstadoUseCase';
import { MongoEstadoRepository } from '../../../repositories/implementations/MongoEstadoRepository';

const mongoEstadoRepository = new MongoEstadoRepository();
const listEstadoUseCase = new ListEstadoUseCase(mongoEstadoRepository);
const listEstadoController = new ListEstadoController(listEstadoUseCase);

export { listEstadoUseCase, listEstadoController }