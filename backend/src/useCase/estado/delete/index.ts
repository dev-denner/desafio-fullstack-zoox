import { DeleteEstadoController } from './DeleteEstadoController';
import { DeleteEstadoUseCase } from './DeleteEstadoUseCase';
import { MongoEstadoRepository } from '../../../repositories/implementations/MongoEstadoRepository';

const mongoEstadoRepository = new MongoEstadoRepository();
const deleteEstadoUseCase = new DeleteEstadoUseCase(mongoEstadoRepository);
const deleteEstadoController = new DeleteEstadoController(deleteEstadoUseCase);

export { deleteEstadoUseCase, deleteEstadoController }