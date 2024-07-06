var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER || 'PCS',
  password: 'pa2024',
  database: process.env.DB_NAME || 'pcs'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connexion à la base de données réussie.');
});

module.exports = connection;

