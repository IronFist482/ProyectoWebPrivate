import { createPool } from "mysql2/promise"

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'idcp2005',
    port: 3306,
    database: 'p_sofquimic'
})

export { pool };