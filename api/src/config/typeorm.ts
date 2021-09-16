import {createConnection} from "typeorm";
import path from "path";

export const connect = async () => {

        await createConnection(({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'sebastian',
        password: 'UUT054lolo@',
        database: 'learningDev',
        entities: [
            path.join(__dirname,'../entity/**/**.ts')
        ],
        synchronize: true 
    }));
    console.log("Database into conected")
};

