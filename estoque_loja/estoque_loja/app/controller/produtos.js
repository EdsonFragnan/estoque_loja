const db = require('../../metodos/metodos.js');

module.exports.listarProdutos = (req, res, callback) => {
  db.find('estoque_produtos', function(err, produtos) {
    if (err) {
      return res(err);
    } else if (!produtos) {
      res(req.flash('loginMessage', 'Lista vazia.'));
    } else if (produtos.length === 0) {
      res(req.flash('loginMessage', 'Lista vazia.'));
    } else {
      return callback(produtos);
    }
  });
}
