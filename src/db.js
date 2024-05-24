import { createPool } from "mysql2/promise"
import { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQL_DATABASE, MYSQLPORT} from './config.js'

export const pool = createPool({
    user: MYSQLUSER,
    password: MYSQLPASSWORD,
    host: MYSQLHOST,
    port: MYSQLPORT,
    database: MYSQL_DATABASE
})
