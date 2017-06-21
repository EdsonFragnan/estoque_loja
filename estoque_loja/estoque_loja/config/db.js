const MongoClient = require('mongodb').MongoClient;

module.exports = {
  connection: (callback) => {
    const caminho = 'mongodb://estoqueloja:AEJ151618@ds157040.mlab.com:57040/heroku_s6mfc484';
    //mongodb://estoqueloja:AEJ151618@ds157040.mlab.com:57040/heroku_s6mfc484
    //mongodb://127.0.0.1:27017/estoqueloja
    MongoClient.connect(caminho, (err, db) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, db);
      };
    });
  }
};
