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

module.exports.cadastroProduto = (req, res, callback) => {
  const request = {
    'id': req.body.id,
    'Nome': req.body.Nome,
    'marca': req.body.marca,
    'descricao': req.body.descricao,
    'cadastro': req.user.nome + ' ' + req.user.sobrenome,
    'categoria': req.body.categoria,
    'valor': req.body.valor,
    'quantidade': req.body.quantidade,
    'data_cadastro': dataAtualFormatada()
  };

  db.insertOne(request, 'estoque_produtos', function(err, avisos) {
    if (err) {
      return res(err);
    } else {
      return callback('Aviso cadastrado com sucesso.');
    }
  });
}
