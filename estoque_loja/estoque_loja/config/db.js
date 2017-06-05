const MongoClient = require('mongodb').MongoClient;

module.exports = {
  connection: (callback) => {
    const caminho = 'mongodb://127.0.0.1:27017/estoqueloja';
    MongoClient.connect(caminho, (err, db) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, db);
      };
    });
  }
};
