// const passport = require('passport');
// const localStrategy = require('passport-local').Strategy;
// const mongoose = require('mongoose');


var User = require('../models/model');

// passport.use(
//     new localStrategy({ usernameField: 'email' },
//         (username, password, done) => {
//             User.findOne( 
//                 (err, user) => {
//                     if (err)
//                         return done(err); 

//                     else if (!user)
//                         return done(null, false, { message: 'Email is not registered' });

//                     else if (!user.verifyPassword(password))
//                         return done(null, false, { message: 'Wrong Password' });

//                     else
//                         return done(null, user);
//                 });
//         })
// )



var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

passport.use('local',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
},
    function (username, password, done) {
         console.log('user from passport', User)
        User.findOne({ email: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            // if (!user.(password)) {
            //     return done(null, false, { message: 'Incorrect password.' });
            // }
            return done(null, user);
        });
    }
));


passport.serializeUser(function(user, done) {
    done(null, user._id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  