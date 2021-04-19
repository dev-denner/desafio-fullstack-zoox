import { uuid } from "uuidv4";
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

export class Cidade {

    public readonly id: string;
    public nome: string;
    public estadoId: string;
    public readonly dateCreate: string;
    public readonly dateLastUpadte: string;

    constructor(props: Omit<Cidade, 'id'>, id?: string) {
        Object.assign(this, props);

        if(!id){
            this.id = uuid();
            this.dateCreate = moment.locale();
        }
        this.dateLastUpadte = moment.locale();
    }
}