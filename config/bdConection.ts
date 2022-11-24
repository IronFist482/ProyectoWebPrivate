import { createPool } from "mysql2/promise"

const pool = createPool({
    host: 'containers-us-west-51.railway.app',
    user: 'root',
    password: 'IDYv8t8LZN2z9II3FkDw',
    port: 8074,
    database: 'railway'
})

export { pool };