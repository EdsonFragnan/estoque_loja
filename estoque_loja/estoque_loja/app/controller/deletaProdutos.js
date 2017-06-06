const db = require('../../metodos/metodos.js');

module.exports.deletaProdutos = (req, res, callback) => {
  const request = {
    'id' : req.params.id_produto
  };
  db.deleteOne(request, 'estoque_produtos', function(err, avisos) {
    if (err) {
      return res(err);
    } else {
      return callback(null, avisos);
    }
  });
}
