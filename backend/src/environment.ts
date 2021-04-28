import * as dotenv from 'dotenv';
dotenv.config();

enum Environments {
    local_environment = 'local',
    dev_environment = 'dev'
}

class Environment {

    private environment: String;

    constructor(environment: String) {
        this.environment = environment;
    }

    getPort() {
        return process.env.PORT;
    }

    getDBName(): String {
        const user = process.env.USER_DB;
        const secret = process.env.PASS_DB;
        const db = process.env.NAME_BD;
        const host = process.env.HOST_BD;
        return `mongodb+srv://${user}:${secret}@${db}.${host}/${db}`;
    }
}

export default new Environment(Environments.local_environment);