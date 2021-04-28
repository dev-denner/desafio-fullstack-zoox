export class Cidade {

    public readonly _id: string;
    public nome: string;
    public estado_id: string;
    private date_create: Date;
    private last_update: Date;

    constructor(props: Omit<Cidade, '_id'>, _id?: string) {
        Object.assign(this, props);

        if (!_id) {
            this.date_create = new Date(Date.now());
        }
        this.last_update = new Date(Date.now());
    }
}