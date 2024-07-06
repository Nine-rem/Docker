var mysql = require('mysql2');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'PCS',
  password: 'pa2024',
  database: 'pcs'
});

connection.connect(function (err) {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connexion à la base de donnée réussie.');
});

module.exports = connection;
