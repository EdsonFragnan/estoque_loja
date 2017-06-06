const db = require('../../metodos/metodos.js');

module.exports.meusAvisos = (req, res, callback) => {
  const id = req.user.cpf;
  db.findAvisos('estoque_avisos', id, function(err, avisos) {
    if (err) {
      callback(err);
    } else if (!avisos) {
      callback(req.flash('loginMessage', 'Lista não possui avisos.'));
    } else if (avisos.length === 0) {
      callback(req.flash('loginMessage', 'Lista não possui avisos.'));
    } else {
      callback(null, avisos);
    }
  });
}
