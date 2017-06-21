module.exports = {
  tipoUser: (tipoAdmin) => {
    if (tipoAdmin === 'admin') {
      const menuAdmin = [
        '<li id="index">' +
          '<a href="/index"><span class="glyphicon glyphicon-home"></span> Início</a>' +
        '</li>' +
        '<li id="produtos">' +
          '<a href="/listaprodutos"><span class="glyphicon glyphicon-menu-right"></span> Lista produtos</a>' +
        '</li>' +
        '<li id="cadProduto">' +
          '<a href="/cadastroproduto"><span class="glyphicon glyphicon-menu-right"></span> Cadastro produto</a>' +
        '</li>' +
        '<li id="listaUser">' +
          '<a href="/listausuarios"><span class="glyphicon glyphicon-menu-right"></span> Lista usuários</a>' +
        '</li>' +
        '<li id="cadUsuario">' +
          '<a href="/cadastrousuario"><span class="glyphicon glyphicon-menu-right"></span> Cadastro usuário</a>' +
        '</li>' +
        '<li id="menuAvisos">' +
          '<a href="/meusavisos"><span class="glyphicon glyphicon-menu-right"></span> Meus avisos</a>' +
        '</li>' +
        '<li id="cadAvisos">' +
          '<a href="/cadastroaviso"><span class="glyphicon glyphicon-menu-right"></span> Cadastro aviso</a>' +
        '</li>'
      ];
      return menuAdmin;
    } else {
      const menuNAdmin = [
        '<li id="index">' +
          '<a href="/index"><span class="glyphicon glyphicon-home"></span> Início</a>' +
        '</li>'
      ];
      return menuNAdmin;
    }
  }
};
