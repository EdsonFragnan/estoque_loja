const db = require('../../metodos/metodos.js');

module.exports.deletaAviso = (req, res, callback) => {
  const request = {
    'id_aviso' : req.params.id_aviso
  };
  db.deleteOne(request, 'estoque_avisos', function(err, avisos) {
    if (err) {
      return res(err);
    } else {
      return callback(null, avisos);
    }
  });
}
