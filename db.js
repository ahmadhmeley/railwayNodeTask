const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "123456",
    database: "task",
    host: "localhost",
    port: 5432,


})

module.exports = pool;