const db = require('../../metodos/metodos.js');

const comparar = (a, b) => {
  return new Date(a.data) < new Date(b.data);
};

module.exports.listarAvisos = (req, res, callback) => {
  db.find('estoque_avisos', function(err, avisos) {
    if (err) {
      callback(err);
    } else if (!avisos) {
      callback(req.flash('loginMessage', 'Lista não possui avisos.'));
    } else if (avisos.length === 0) {
      callback(req.flash('loginMessage', 'Lista não possui avisos.'));
    } else {
      callback(null, avisos.sort(comparar));
    }
  });
}
