const client = require('pg').Pool

const DB_URL = 'noteDB'
const pool = new client({connectionString: DB_URL, ssl: {rejectUnauthorized: false}});

module.exports = pool;
