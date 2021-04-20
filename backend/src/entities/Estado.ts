import { uuid } from "uuidv4";
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

export class Estado {

    public readonly id: string;
    public nome: string;
    public abreviacao: string;
    private dateCreate: string;
    private dateLastUpadte: string;

    constructor(props: Omit<Estado, 'id'>, id?: string) {
        Object.assign(this, props);

        if(!id){
            this.id = uuid();
            this.dateCreate = moment.locale();
        }
        this.dateLastUpadte = moment.locale();
    }
}