import { createPool } from "mysql2/promise"
import { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} from './config.js'

export const pool = createPool({
    host: DB_HOST || 'localhost',
    port: DB_PORT || 3306,
    user: DB_USER || 'root',
    password: DB_PASSWORD || 'root',
    database: DB_DATABASE || 'usersdb'
})
