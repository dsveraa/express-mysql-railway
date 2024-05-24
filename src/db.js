import { createPool } from "mysql2/promise"
import { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQL_DATABASE, MYSQLPORT} from './config.js'

export const pool = createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
})
