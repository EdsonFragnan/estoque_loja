const db = require('../../metodos/metodos.js');

module.exports.cadastroUser = (req, res, callback) => {
  const request = {
    'matricula': req.body.matricula,
    'cargo': req.body.cargo,
    'nome': req.body.nome,
    'tipoUsuario': req.body.tipoUsuario,
    'cpf': req.body.cpf,
    'email': req.body.email,
    'logradouro': req.body.logradouro,
    'complemento': req.body.complemento,
    'bairro': req.body.bairro,
    'sobrenome': req.body.sobrenome,
    'rg': req.body.rg,
    'senha': req.body.senha,
    'uf': req.body.uf,
    'cep': req.body.cep,
    'data_cadastro': new Date()
  };

  db.insertOne(request, 'estoque_usuario', function(err, data) {
    if (err) {
      return callback(req.flash('loginMessage', 'Usuário não cadastrado.'));
    } else {
      return callback(null, req.flash('loginMessage', 'Usuário cadastrado com sucesso.'));
    }
  });
}
