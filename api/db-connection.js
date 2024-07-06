var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'database',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connexion à la base de données réussie.');
});

module.exports = connection;

