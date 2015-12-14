var jwt = require('jsonwebtoken');
var config = require('../config/config').development;
var crypto = require('crypto');

exports.tokenExist = function(req, res, next) {
	if (!req.headers.usertoken) {
		var signedToken = jwt.sign({
			session: crypto.randomBytes(16).toString('base64')
		}, config.serverKey);

		req.headers.usertoken = signedToken;
		req.body.usertoken = signedToken;
	}
	return next();
};

exports.UserToken = function(req, res, next) {
	console.log('req.headers.UserToken = ', req.headers.usertoken);
	if (!req.headers.usertoken) {
		return res.status(404).send({error:'Missing credentials'});
	}
	token = req.headers.usertoken.replace(/"/g,'');
	var decoded = jwt.verify(token, config.serverKey);
	// console.log(decoded);
	if((decoded.username !== config.defaultUser.username)
		|| (decoded.password !== config.defaultUser.password)) {
		return res.status(401).send({error:'Incorrect login credentials'});
	}
	return next();
};