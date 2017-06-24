const db = require('../../metodos/metodos.js');
const fs = require('fs');

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
    'imagem': req.body.imagem,
    'data_cadastro': new Date()
  };
  console.log(request);
  db.insertOne(request, 'estoque_usuario', function(err, data) {
    if (err) {
      return callback(req.flash('loginMessage', err));
    } else {
      return callback(null, req.flash('loginMessage', 'Usuário cadastrado com sucesso.'));
    }
  });
}


/*
//base64_decode(base64str, 'copy.jpg');
function base64_decode(base64str, file) {
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    var bitmap = new Buffer(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
    console.log('******** File created from base64 encoded string ********');
}


*/
