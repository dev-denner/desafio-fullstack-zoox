import { Cidade } from '../../entities/Cidade';
import { ICidadeRepository } from '../ICidadeRepository';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true
    },
    estado_id: {
        type: Schema.Types.ObjectId,
        ref: "estado"
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

export const cidade = mongoose.model('cidade', schema);

export class MongoCidadeRepository implements ICidadeRepository {

    list(query: any, sort: string, callback: any) {
        cidade.find(query).sort(sort).exec(callback);
    }

    save(params: Cidade, callback: any) {
        const newCidade = new cidade(params);
        newCidade.save(callback);
    }

    update(params: Cidade, callback: any) {
        const query = { _id: params._id };
        cidade.findOneAndUpdate(query, params, callback);
    }

    delete(id: String, callback: any) {
        const query = { _id: id };
        cidade.deleteOne(query, callback);
    }

}