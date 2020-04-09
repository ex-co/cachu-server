var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testDB');

var db = mongoose.connection;

db.on('error',function(){
	console.log('connection failed!!');
});

db.once('open',function(){
	console.log('connect!!!');
});

var cafe = new mongoose.Schema({
	title : 'string',
	link : 'string',
	category : 'string',
	description : 'string',
	telephone : 'string',
	address : 'string',
	roadAddress : 'string',
    mapx : 'number',
    mapy : 'number'
});

var Cafe = mongoose.model('Schema', cafe);
var newCafe = new Cafe({"title" :"예지카페", "link" : "https://www.instagram.com/fear___not/", "category" : "음식점>카페,디저트", "description" : "", "telephone" : "", "address" : "경기도 수원시 팔달구 인계동 1039", "roadAddress" : "경기도 수원시 팔달구 인계로124번길 19", "mapx" : "314253", "mapy" : "518746" });
/* 검색  */
router.get('/find', function(req, res, next) {
	Cafe.find(function(err, result){
  		if(err) {
  			console.log("error :"+err);
  			return;
  		}
  		console.log("test : "+result);
  		res.render('nosql',{data:result});
  	});
});
/* 등록  */
router.get('/add', function(req, res, next) {
	newBoard.save(function(err, result){
		if(err){
			console.log(err);
		}
		else{
			console.log('save!');
		}
	});
	res.redirect('/nosql/find');
});

module.exports = router;