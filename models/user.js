// Generated by CoffeeScript 1.7.1
(function() {
  var UserSchema, bcrypt, mongoose;

  mongoose = require('mongoose');

  bcrypt = require('bcrypt');

  UserSchema = mongoose.Schema({
    local: {
      username: String,
      password: String
    },
    facebook: {
      id: String,
      token: String,
      email: String,
      name: String
    }
  });

  UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8, null));
  };

  UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
  };

  module.exports = mongoose.model('User', UserSchema);

}).call(this);
