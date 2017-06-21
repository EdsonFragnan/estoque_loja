const produtos = require('./controller/produtos');
const avisos = require('./controller/avisos');
const respAvisos = require('./controller/meusavisos')
const cadAvisos = require('./controller/cadastroAviso');
const cadProduto = require('./controller/cadastroProduto');
const cadastroUser = require('./controller/cadastroUser');
const deleteAvisos = require('./controller/deletaAvisos');
const deletaProdutos = require('./controller/deletaProdutos');
const alteraPerfil = require('./controller/alteraPerfil');
const listaUsuarios = require('./controller/listaUsuarios');
const deletaUsuario = require('./controller/deletaUser');
const menu = require('./menu.js');

module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.render('login.ejs', {message: req.flash('loginMessage')});
	});

	app.get('/login', function(req, res) {
		res.render('login.ejs', {message: req.flash('loginMessage')});
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/index',
		failureRedirect : '/',
		failureFlash : true
	}));

	app.get('/index', isLoggedIn, function(req, res) {
		avisos.listarAvisos(req, res, (err, avisos) => {
			const menuMontado = menu.tipoUser(req.user.tipoUsuario);
			if (err != null) {
					res.render('index.ejs', {
						user: req.user,
						message: req.flash('loginMessage'),
						avisos: '',
						menu: menuMontado[0]
				});
			} else {
				res.render('index.ejs', {
					user: req.user,
					avisos: avisos,
					message: '',
					menu: menuMontado[0]
				});
			}
		});
	});

	app.get('/profile', isLoggedIn, function(req, res) {
		const menuMontado = menu.tipoUser(req.user.tipoUsuario);
		res.render('profile.ejs', {
			user: req.user,
			mensagem: '',
			menu: menuMontado[0]
		});
	});

	app.patch('/profile', isLoggedIn, function(req, res) {
		alteraPerfil.alteraPerfil(req, res, (err, resp) => {
			const menuMontado = menu.tipoUser(req.user.tipoUsuario);
			if (err) {
				res.render('profile.ejs', {
					user: req.user,
					mensagem: '<h3 class="bg-danger alerta">Alteração não realizada.</h3>',
					menu: menuMontado[0]
				});
			} else {
				res.render('profile.ejs', {
					user: req.user,
					mensagem: '<h3 class="bg-success alerta">' + req.flash('loginMessage') + ' <small>Atualize a página para ver a alteração.</small></h3>',
					menu: menuMontado[0]
				});
			}
		});
	});


	app.get('/listaprodutos', isLoggedIn, function(req, res) {
		produtos.listarProdutos(req, res, (err, produtos) => {
			const menuMontado = menu.tipoUser(req.user.tipoUsuario);
			if (err != null) {
				res.render('listaprodutos.ejs', {
					user: req.user,
					mensagem: req.flash('loginMessage'),
					menu: menuMontado[0]
				});
			} else {
				res.render('listaprodutos.ejs', {
					user: req.user,
					mensagem: '',
					produtos: produtos,
					menu: menuMontado[0]
				});
			}
		});
	});

	app.get('/cadastroproduto', isLoggedIn, function(req, res) {
		const menuMontado = menu.tipoUser(req.user.tipoUsuario);
		res.render('cadastroproduto.ejs', {
			user: req.user,
			mensagem: '',
			menu: menuMontado[0]
		});
	});

	app.post('/cadastroproduto', isLoggedIn, function(req, res) {
		cadProduto.cadastroProduto(req, res, (err, produto) => {
			const menuMontado = menu.tipoUser(req.user.tipoUsuario);
			if (err != null) {
				res.render('cadastroproduto.ejs', {
					user: req.user,
					mensagem: '<h3 class="bg-danger alerta">'+ req.flash('loginMessage') +'</h3>',
					menu: menuMontado[0]
				});
			} else {
				res.render('cadastroproduto.ejs', {
					user: req.user,
					mensagem: '<h3 class="bg-success alerta">' + req.flash('loginMessage') + '</h3>',
					menu: menuMontado[0]
				});
			}
		});
	});


	app.get('/cadastrousuario', isLoggedIn, function(req, res) {
		const menuMontado = menu.tipoUser(req.user.tipoUsuario);
		res.render('cadastrousuario.ejs', {
			user: req.user,
			mensagem: '',
			menu: menuMontado[0]
		});
	});

	app.get('/listausuarios', isLoggedIn, function(req, res) {
		const menuMontado = menu.tipoUser(req.user.tipoUsuario);
		listaUsuarios.listarUsers(req, res, (err, usuarios) => {
			const menuMontado = menu.tipoUser(req.user.tipoUsuario);
			if (err != null) {
				res.render('listaprodutos.ejs', {
					user: req.user,
					mensagem: req.flash('loginMessage'),
					menu: menuMontado[0]
				});
			} else {
				res.render('listausuarios.ejs', {
					user: req.user,
					mensagem: '',
					usuarios: usuarios,
					menu: menuMontado[0]
				});
			}
		});
	});

	app.post('/cadastrousuario', isLoggedIn, function(req, res) {
		cadastroUser.cadastroUser(req, res, (err, resp) => {
			const menuMontado = menu.tipoUser(req.user.tipoUsuario);
			if (err != null) {
				res.render('cadastrousuario.ejs', {
					user: req.user,
					mensagem: '<h3 class="bg-danger alerta">'+req.flash('loginMessage')+'</h3>',
					menu: menuMontado[0]
				});
			} else {
				res.render('cadastrousuario', {
					user: req.user,
					mensagem: '<h3 class="bg-success alerta">' + req.flash('loginMessage') +'</h3>',
					menu: menuMontado[0]
				});
			}
		});
	});

	app.delete('/listausuarios/:cpf', isLoggedIn, function(req, res) {
		deletaUsuario.deletaUser(req, res, (err, data) => {
			const menuMontado = menu.tipoUser(req.user.tipoUsuario);
			if (err != null) {
					res.render('cadastrousuario.ejs', {
					user: req.user,
					mensagem: req.flash('loginMessage'),
					avisosRes: '',
					menu: menuMontado[0]
				});
			} else {
				res.redirect('/listausuarios');
			}
		});
	});

	app.get('/cadastroaviso', isLoggedIn, function(req, res) {
		const menuMontado = menu.tipoUser(req.user.tipoUsuario);
		res.render('cadastroaviso.ejs', {
			user : req.user,
			menu: req.user,
			menu: menuMontado[0]
		});
	});

	app.get('/meusavisos', isLoggedIn, function(req, res) {
		respAvisos.meusAvisos(req, res, (err, data) => {
			const menuMontado = menu.tipoUser(req.user.tipoUsuario);
			if (err != null) {
					res.render('meusavisos.ejs', {
					user: req.user,
					mensagem: req.flash('loginMessage'),
					avisosRes: '',
					menu: menuMontado[0]
				});
			} else {
				res.render('meusavisos.ejs', {
					user: req.user,
					avisosRes: data,
					mensagem: '',
					menu: menuMontado[0]
				});
			}
		});
	});

	app.delete('/meusavisos/:id_aviso', isLoggedIn, function(req, res) {
		deleteAvisos.deletaAviso(req, res, (err, data) => {
			const menuMontado = menu.tipoUser(req.user.tipoUsuario);
			if (err != null) {
					res.render('meusavisos.ejs', {
					user: req.user,
					mensagem: req.flash('loginMessage'),
					avisosRes: '',
					menu: menuMontado[0]
				});
			} else {
				res.redirect('/meusavisos');
			}
		});
	});

	app.delete('/listaprodutos/:id_produto', isLoggedIn, function(req, res) {
		deletaProdutos.deletaProdutos(req, res, (err, data) => {
			res.redirect('/listaprodutos');
			/*if (err != null) {
					res.render('listaprodutos.ejs', {
					user: req.user,
					mensagem: req.flash('loginMessage'),
					avisosRes: ''
				});
			} else {
				res.render('listaprodutos.ejs', {
					user: req.user,
					produtos: produtos
				});
			}*/
		});
	});



	app.post('/cadastroaviso', isLoggedIn, function(req, res) {
		cadAvisos.cadastroAviso(req, res, (avisos) => {
			app.get('io').emit('novoAviso');
			res.redirect('/index');
		});
	});

	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
}
