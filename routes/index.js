
/*
 * GET home page.
 */
var mongoose = require('mongoose');
var console = require('console');

mongoose.connect('mongodb://symfony:symfony@ds037368.mongolab.com:37368/squareenix');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var ActivitySchema = new Schema({
    activityId    : String
  , createdAt     : Date
});
var Activity = mongoose.model('ActivityModel', ActivitySchema);


exports.index = function(req, res){
	var track = new Activity({ activityId: 'mongo1', createdAt: 0 });
	track.save(function (err) {
		console.log('Saving Mongo document');
  		if (err) 
  			console.log('Problem with Mongo');
	});

	res.render('index', { title: 'Express' });
};
