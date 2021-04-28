import { Estado } from '../../entities/Estado';
import { IEstadoRepository } from '../IEstadoRepository';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true
    },
    abreviacao: {
        type: String,
        required: true
    },
    date_create: {
        type: Date,
        default: Date.now
    },
    last_update: {
        type: Date,
        default: Date.now
    }
});

export const estado = mongoose.model('estado', schema);

export class MongoEstadoRepository implements IEstadoRepository {

    list(query: any, sort: string, callback: any) {
        estado.find(query).sort(sort).exec(callback);
    }

    save(params: Estado, callback: any) {
        const newEstado = new estado(params);
        newEstado.save(callback);
    }

    update(params: Estado, callback: any) {
        const query = { _id: params._id };
        estado.findOneAndUpdate(query, params, callback);
    }

    delete(id: String, callback: any) {
        const query = { _id: id };
        estado.deleteOne(query, callback);
    }

}