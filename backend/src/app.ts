import express from "express";
import mongoose from 'mongoose';
import consola from 'consola';
import q from 'q';
import environment from "./environment";
import { EstadoRoutes } from "./routes/EstadoRoutes";
import { CidadeRoutes } from "./routes/CidadeRoutes";

class App {

    public app: express.Application;
    public mongoUrl: string = environment.getDBName() + '';

    private estado_routes: EstadoRoutes = new EstadoRoutes();
    private cidade_routes: CidadeRoutes = new CidadeRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.estado_routes.route(this.app);
        this.cidade_routes.route(this.app);
    }

    private config(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.Promise = q.Promise;
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        mongoose.connection.on('connecting', () => consola.info('database connecting'));
        mongoose.connection.on('connected', () => consola.success('database connected'));
        mongoose.connection.on('disconnecting', () => consola.info('database disconnecting'));
        mongoose.connection.on('disconnected', () => consola.info('database disconnected'));
        mongoose.connection.on('error', () => consola.error('database error'));
    }
}
export default new App().app;