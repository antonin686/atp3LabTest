var db = require('./db')

module.exports = {

	getById: function(id, callback){

			var sql = "select * from user where id="+id;
			db.getResults(sql, function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
					callback([]);
				}
			});
	},
	
	getAll: function(callback){
		var sql = "select * from employee";
		
		db.getResults(sql, function(results){
			
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});	
	},
	insert: function(user, callback){

		var sql = `insert into employee values('${user.name}', '${user.contact}')`;
		db.execute(sql, function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql ="update employee set username='"+ user.username+"', password='"+user.password+"' where id="+user.id;
		
		console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete: function(id, callback){
		var sql = "delete from employee where id="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	}
}



