const MongoClient = require('mongodb').MongoClient;

module.exports = {
  connection: (callback) => {
    const caminho = 'mongodb://heroku_s6mfc484:AEJ151618@ds157040.mlab.com:57040/heroku_s6mfc484';
    MongoClient.connect(caminho, (err, db) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, db);
      };
    });
  }
};
