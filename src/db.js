import { createPool } from "mysql2/promise"
// import { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQL_DATABASE, MYSQLPORT} from './config.js'

export const pool = createPool({
    host: 'viaduct.proxy.rlwy.net',
    port: 56936,
    user: 'root',
    password: 'zsuBaaeJMjYFdAMjNIgsfuDJwuTgGwgY',
    database: 'railway'
})
