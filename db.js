const { Pool, Client } = require("pg");

const connectionString = process.env.CONNECTION_STRING;

const pool = new Pool({
  connectionString,
});

module.exports = {
  pool,
};
