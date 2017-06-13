const LocalStrategy = require('passport-local').Strategy;
const db = require('../../metodos/metodos.js');

module.exports = function(passport) {
    passport.serializeUser(function(usuario, done) {
        done(null, usuario);
    });

    passport.deserializeUser(function(usuario, done) {
        db.findOne(usuario.matricula, function(err, user) {
          done(err, user);
        });
    });

    /*passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
        User.findOne({ 'local.email' :  email }, function(err, user) {

            if (err)
                return done(err);

            if (user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

				        var newUser            = new User();

                newUser.local.email    = email;
                newUser.local.password = newUser.generateHash(password);

				        newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });

    }));*/

    passport.use('local-login', new LocalStrategy({
        usernameField : 'matricula',
        passwordField : 'senha',
        passReqToCallback : true
    },
    function(req, matricula, senha, done) {

        db.findOne(matricula, function(err, user) {
          if (err) {
            return done(err);
          } else if (!user) {
            return done(null, false, req.flash('loginMessage', 'Usuário não encontrado.'));
          } else if (senha === undefined || senha === '' || senha != user.senha) {
            return done(null, false, req.flash('loginMessage', 'Senha inválida.'));
          } else {
            return done(null, user);
          }
        });
    }));

};
