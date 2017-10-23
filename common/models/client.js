'use strict';

module.exports = function(Client) {
   Client.validatesUniquenessOf('email', {message: 'email is not unique'});
   Client.validatesUniquenessOf('username', {message: 'username is not unique'});
};
