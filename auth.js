const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
    clientID: "",
    clientSecret: "",
    callbackURL: "http://localhost:5000/auth/google/callback",
  },
  function(accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});