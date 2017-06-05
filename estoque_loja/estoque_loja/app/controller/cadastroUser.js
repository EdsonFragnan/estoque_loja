const db = require('../../metodos/metodos.js');

const dataAtualFormatada = () => {
    var data = new Date();
    var dia = data.getDate();
    if (dia.toString().length == 1)
      dia = "0"+dia;
    var mes = data.getMonth()+1;
    if (mes.toString().length == 1)
      mes = "0"+mes;
    var ano = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
};

module.exports.cadastroUser = (req, res, callback) => {
  const request = {
    'matricula': req.body.matricula,
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

  db.insertOne(request, 'estoque_usuario', function(err, avisos) {
    if (err) {
      return callback(err);
    } else {
      return callback('Usuário cadastrado com sucesso.');
    }
  });
}
