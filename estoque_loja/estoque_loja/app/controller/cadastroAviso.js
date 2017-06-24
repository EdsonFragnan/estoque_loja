const db = require('../../metodos/metodos.js');
const moment = require('moment');

module.exports.cadastroAviso = (req, res, callback) => {
  const request = {
    "nome": req.user.nome,
    "data": moment().locale('pt-br').format('L'),
    "titulo": req.body.titulo,
    "descricao": req.body.descricao,
    "id_cadastro": req.user.cpf,
    "id_aviso": req.body.id_aviso,
    "tipoAviso": req.body.tipoAviso
  };
  db.insertOne(request, 'estoque_avisos', function(err, avisos) {
    if (err) {
      return res(err);
    } else {
      return callback('Aviso cadastrado com sucesso.');
    }
  });
}
