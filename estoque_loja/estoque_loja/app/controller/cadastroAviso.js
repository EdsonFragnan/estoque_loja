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

module.exports.cadastroAviso = (req, res, callback) => {
  const request = {
    "nome": req.user.nome,
    "data": dataAtualFormatada(),
    "titulo": req.body.titulo,
    "descricao": req.body.descricao,
    "id_cadastro": req.user.cpf
  };
  db.insertOne(request, 'estoque_avisos', function(err, avisos) {
    if (err) {
      return res(err);
    } else {
      return callback('Aviso cadastrado com sucesso.');
    }
  });
}
