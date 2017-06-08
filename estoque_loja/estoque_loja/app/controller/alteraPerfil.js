const db = require('../../metodos/metodos.js');

module.exports.alteraPerfil = (req, res, callback) => {
  const request = {
    'cargo': req.body.cargo,
    'nome': req.body.nome,
    'cpf': req.body.cpf,
    'email': req.body.email,
    'logradouro': req.body.logradouro,
    'complemento': req.body.complemento,
    'bairro': req.body.bairro,
    'sobrenome': req.body.sobrenome,
    'rg': req.body.rg,
    'senha': req.body.senha,
    'uf': req.body.uf,
    'cep': req.body.cep
  };
  db.updateOne(request, 'estoque_usuario', function(err, avisos) {
    if (err) {
      return callback(req.flash('loginMessage', ''));
    } else {
      return callback(null, req.flash('loginMessage', 'Alteração feita com sucesso.'));
    }
  });
}
