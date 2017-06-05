const produtos = require('./controller/produtos');
const avisos = require('./controller/avisos');
const respAvisos = require('./controller/meusAvisos')
const cadAvisos = require('./controller/cadastroAviso');
const cadProduto = require('./controller/cadastroProduto');

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
			if (err != null) {
					res.render('index.ejs', {
					user: req.user,
					message: req.flash('loginMessage'),
					avisos: ''
				});
			} else {
				res.render('index.ejs', {
					user: req.user,
					avisos: avisos,
					message: ''
				});
			}
		});
	});

	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user
		});
	});

	app.get('/listaprodutos', isLoggedIn, function(req, res) {
		produtos.listarProdutos(req, res, (produtos) => {
			res.render('listaprodutos.ejs', {
				user: req.user,
				produtos: produtos
			});
		});

	});

	app.get('/cadastroproduto', isLoggedIn, function(req, res) {
		res.render('cadastroproduto.ejs', {
			user : req.user
		});
	});

	app.post('/cadastroproduto', isLoggedIn, function(req, res) {
		cadProduto.cadastroProduto(req, res, (produto) => {
		});
	});


	app.get('/cadastrousuario', isLoggedIn, function(req, res) {
		res.render('cadastrousuario.ejs', {
			user : req.user
		});
	});

	app.get('/cadastroaviso', isLoggedIn, function(req, res) {
		res.render('cadastroaviso.ejs', {
			user : req.user
		});
	});

	app.get('/meusavisos', isLoggedIn, function(req, res) {
		respAvisos.meusAvisos(req, res, (err, respAvisos) => {
				res.render('meusavisos.ejs', {
					user: req.user,
					avisosRes: respAvisos,
					mensagem: ''
				});
		});
	});

	app.post('/cadastroaviso', isLoggedIn, function(req, res) {
		cadAvisos.cadastroAviso(req, res, (avisos) => {});
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