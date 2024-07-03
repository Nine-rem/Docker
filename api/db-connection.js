var mysql = require('mysql2');


var connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'PCS',
  password: process.env.DB_PASSWORD || 'pa2024',
  database: process.env.DB_NAME || 'pcs'
});

connection.connect(function (err) {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connexion à la base de donnée réussie.');
});

module.exports = connection;
