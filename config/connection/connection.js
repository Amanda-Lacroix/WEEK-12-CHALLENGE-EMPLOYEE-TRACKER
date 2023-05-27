// to use the .env
require ('dotenv').config ();
// Import and require MySQL2
const mysql = require ('mysql2');
// Retreiving the information from the .env file
const sqlConnection = mysql.createConnection({
    port: process.env. DB_PORT,
    user: process.env. DB_USER,
    host: process.env. DB_HOST,
    password: process.env. DB_PASSWORD,
    database: process.env. DB_NAME
})
// Throw error if cannot connect otherwise log that the connection has been established
sqlConnection.connect((err) => {
    if (err){
        console.error ('Connection Error to MySQL database');
        return;
    }
    console.log ('Connection has been established to MySQL database')
});
// End the connection
sqlConnection.end();

module.exports = sqlConnection;