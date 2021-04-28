export class Estado {

    public readonly _id: string;
    public nome: string;
    public abreviacao: string;
    private date_create: Date;
    private last_update: Date;

    constructor(props: Omit<Estado, '_id'>, _id?: string) {
        Object.assign(this, props);

        if (!_id) {
            this.date_create = new Date(Date.now());
        }
        this.last_update = new Date(Date.now());
    }
}