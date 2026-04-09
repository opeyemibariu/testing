
var express = require('express');
var router = express.Router();


var MongoClient = require('mongodb').MongoClient;

var url = process.env.URI || "mongodb+srv://opeyemi:BecY8gOMdu0NczFY@cluster0.cvkut70.mongodb.net/?appName=Cluster0";


router.get('/', (req, res, next) => {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("test");
		dbo.collection("me").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log('Mongo data coming in hot')
    		console.log(result);
    		res.json(result)
    		db.close();
    	});
	}); 
});

module.exports = router;
