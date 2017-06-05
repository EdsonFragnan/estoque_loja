module.exports = {
  execFindOne: (db, req, callback) => {
    const envio = {
      'matricula': req
    };
    db.collection('estoque_usuario').findOne(envio, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execFindOneAvisos: (db, req, callback) => {
    const object = {
      'id_cadastro': req.id
    };
    db.collection(req.collectionAcc.toString()).findOne(object, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },


  execFind: (db, collectionAccess, callback) => {
    db.collection(collectionAccess).find().toArray(function(err, items) {
       if (err) {
         callback(err, null);
       } else {
         callback(null, items);
       }
    });
  },

  execInsertOne: (db, collectionAccess, request, callback) => {
    db.collection(collectionAccess).insert(request, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
}
