import { CreateEstadoController } from './CreateEstadoController';
import { CreateEstadoUseCase } from './CreateEstadoUseCase';
import { MongoEstadoRepository } from '../../../repositories/implementations/MongoEstadoRepository';

const mongoEstadoRepository = new MongoEstadoRepository();
const createEstadoUseCase = new CreateEstadoUseCase(mongoEstadoRepository);
const createEstadoController = new CreateEstadoController(createEstadoUseCase);

export { createEstadoUseCase, createEstadoController }