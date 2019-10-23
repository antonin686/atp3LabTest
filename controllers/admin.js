var express = require('express');
var empModel = require('../models/emp_model');

var router = express.Router();

router.get('*', function(req, res, next){
	if(req.session.un != null && req.session.u_type)
	{
		next();
	}		
	else
	{
		res.redirect('/');
	}		
});

router.get('/home', function(req, res){
	res.render("admin/home", { user : req.session.un });
});

router.get('/employee/create', function(req, res){
	res.render("admin/emp_create", { user : req.session.un });
});

router.post('/employee/create', function(req, res){
	
	var u_id = " ";

	var user = {
		name : req.body.name,
		contact : req.body.contact,
		username : req.body.username,
		password : req.body.password
	};

	empModel.insert(user, function(status){
		if(!status){
            res.send('insert failed');
		}
	});

	empModel.getById(-, function(status){
		if(!status){
            res.send('insert failed');
		}
	});

});

router.get('/employee', function(req, res){

	empModel.getAll(function(result){
		if(!result){
            res.render("admin/empList", { user : req.session.un, empList: false });
		}else{      	
			res.render("admin/empList", { user : req.session.un, empList: result });	
		}
	});

	
});





module.exports = router;



