var express = require('express');
var loginModel = require('../models/login_model');

var router = express.Router();

router.get('/login', function(req, res){
	res.render("login");
});

router.post('/login', function(req, res){
	
	var user = {
		username: req.body.username,
		password: req.body.password
	};

	loginModel.validate(user, function(status){
		if(!status){
            res.send('invalid username/password');
		}else{
            console.log(status);
            req.session.un = req.body.username;
            req.session.u_type = status.u_type;
            req.session.u_id = status.u_id;
			res.redirect('/admin/home');	
		}
	});

});

// Logout
router.get('/logout', function(req, res){
	req.session.destroy();
	res.redirect('/');
});


module.exports = router;



