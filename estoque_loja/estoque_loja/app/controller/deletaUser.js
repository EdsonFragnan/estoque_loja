const db = require('../../metodos/metodos.js');

module.exports.deletaUser = (req, res, callback) => {
  const request = {
    'cpf' : req.params.cpf
  };
  db.deleteOne(request, 'estoque_usuario', function(err, avisos) {
    if (err) {
      return res(err);
    } else {
      return callback(null, avisos);
    }
  });
}
