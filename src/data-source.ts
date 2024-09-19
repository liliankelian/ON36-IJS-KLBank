import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "aws-0-sa-east-1.pooler.supabase.com",
    port: 6543,
    username: "postgres.qdtakrekxurbcrklouba",
    password: "bvfsicX2cSIoagaL",
    database: "db_reprograma",
    synchronize: true,
    logging: false,
    //entities: "",
    migrations: [],
    subscribers: [],
})
