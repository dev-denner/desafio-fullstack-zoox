import { Application, Request, Response } from 'express';
import { createCidadeController } from '../useCase/cidade/create';
import { listCidadeController } from '../useCase/cidade/list';
import { updateCidadeController } from '../useCase/cidade/update';
import { deleteCidadeController } from '../useCase/cidade/delete';

export class CidadeRoutes {

    public route(app: Application) {
        app.post('/cidade', (request: Request, response: Response) => {
            return createCidadeController.handle(request, response);
        });

        app.get('/cidade', (request: Request, response: Response) => {
            return listCidadeController.handle(request, response);
        });

        app.get('/cidade/:id', (request: Request, response: Response) => {
            return listCidadeController.handle(request, response);
        });

        app.put('/cidade/:id', (request: Request, response: Response) => {
            return updateCidadeController.handle(request, response);
        });

        app.delete('/cidade/:id', (request: Request, response: Response) => {
            return deleteCidadeController.handle(request, response);
        });
    }
}