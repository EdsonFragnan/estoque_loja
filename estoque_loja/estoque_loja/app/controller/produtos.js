const db = require('../../metodos/metodos.js');

module.exports.listarProdutos = (req, res, callback) => {
  db.find('estoque_produtos', function(err, produtos) {
    if (err) {
      return res(err);
    } else if (!produtos) {
      callback(req.flash('loginMessage', 'Lista vazia.'), null);
    } else if (produtos.length === 0) {
      callback(req.flash('loginMessage', 'Lista vazia.'), null);
    } else {
      return callback(null, produtos);
    }
  });
}
