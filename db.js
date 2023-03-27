const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: '3118',
    host: "localhost",
    port: 5432,
})



module.exports = pool