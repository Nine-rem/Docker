var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'database',
  user: 'PCS',
  password: 'pa2024',
  database: 'pcs'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connexion à la base de données réussie.');
});

module.exports = connection;

