const db = require('../../metodos/metodos.js');

const comparar = (a, b) => {
  return new Date(a.data_cadastro) < new Date(b.data_cadastro);
};

module.exports.listarUsers = (req, res, callback) => {
  db.find('estoque_usuario', function(err, usuarios) {
    if (err) {
      return res(err);
    } else {
      callback(null, usuarios.sort(comparar));
    }
  });
}
