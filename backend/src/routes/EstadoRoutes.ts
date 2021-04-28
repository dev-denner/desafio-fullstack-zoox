import { Application, Request, Response } from 'express';
import { createEstadoController } from '../useCase/estado/create';
import { listEstadoController } from '../useCase/estado/list';
import { updateEstadoController } from '../useCase/estado/update';
import { deleteEstadoController } from '../useCase/estado/delete';

export class EstadoRoutes {

    public route(app: Application) {
        app.post('/estado', (request: Request, response: Response) => {
            return createEstadoController.handle(request, response);
        });

        app.get('/estado', (request: Request, response: Response) => {
            return listEstadoController.handle(request, response);
        });

        app.get('/estado/:id', (request: Request, response: Response) => {
            return listEstadoController.handle(request, response);
        });

        app.put('/estado/:id', (request: Request, response: Response) => {
            return updateEstadoController.handle(request, response);
        });

        app.delete('/estado/:id', (request: Request, response: Response) => {
            return deleteEstadoController.handle(request, response);
        });
    }
}