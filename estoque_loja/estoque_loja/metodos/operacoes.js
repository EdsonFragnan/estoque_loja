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

  execFindAvisos: (db, req, callback) => {
    db.collection(req.collectionAcc.toString()).find({"id_cadastro": {$eq: req.id}}).toArray((err, data) => {
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

  execDeleteOne: (db, collectionAccess, req, callback) => {
    db.collection(collectionAccess).deleteOne(req, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  execUpdateOne: (db, collectionAccess, req, callback) => {
    db.collection(collectionAccess).updateOne({cpf: req.cpf}, {$set:req}, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }
}
