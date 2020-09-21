const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'casimiro2012',
    host: 'localhost',
    port: 5432,
    database: 'firstdatabase'
})

module.exports = pool;