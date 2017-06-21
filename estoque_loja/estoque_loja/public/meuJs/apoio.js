$(function() {
  var url_atual = window.location.href;
  var item = url_atual.split("/");
  if (item[3] === 'index') {
    $("#index").addClass("active");
  } else if (item[3] === 'listaprodutos') {
    $("#produtos").addClass("active");
  } else if (item[3] === 'cadastroproduto') {
    $("#cadProduto").addClass("active");
  } else if (item[3] === 'cadastrousuario') {
    $("#cadUsuario").addClass("active");
  } else if (item[3] === 'meusavisos') {
    $("#menuAvisos").addClass("active");
  } else if (item[3] === 'cadastroaviso') {
    $("#cadAvisos").addClass("active");
  } else if (item[3] === 'listausuarios') {
    $("#listaUser").addClass("active");
  };
});
