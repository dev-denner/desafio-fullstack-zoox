import { UpdateEstadoController } from './UpdateEstadoController';
import { UpdateEstadoUseCase } from './UpdateEstadoUseCase';
import { MongoEstadoRepository } from '../../../repositories/implementations/MongoEstadoRepository';

const mongoEstadoRepository = new MongoEstadoRepository();
const updateEstadoUseCase = new UpdateEstadoUseCase(mongoEstadoRepository);
const updateEstadoController = new UpdateEstadoController(updateEstadoUseCase);

export { updateEstadoUseCase, updateEstadoController }