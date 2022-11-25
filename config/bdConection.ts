import { createPool } from "mysql2/promise"

const pool = createPool({
    host: 'containers-us-west-104.railway.app',
    user: 'root',
    password: 'fhA7g3xxvH1OS9eOEyWF',
    port: 6430,
    database: 'railway'
})

{/*
host: 'containers-us-west-104.railway.app',
    user: 'root',
    password: 'fhA7g3xxvH1OS9eOEyWF',
    port: 6430,
    database: 'railway'
    
host: 'localhost',
    user: 'root',
    password: 'idcp2005',
    port: 3306,
    database: 'p_sofquimic',*/

}

export { pool };