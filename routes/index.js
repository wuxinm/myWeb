
/*
 * GET home page.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs'),
	mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	async = require('async')

/*
	All collections of mongoDB
*/
var mongoUri = process.env.MONGOLAB_URI ||
  	process.env.MONGOHQ_URL ||
  	'mongodb://localhost/myWebsite';
mongoose.connect(mongoUri);

var BlogSchema = new Schema({
		title: { type : String, default : '', trim : true },
		body: { type : String, default : '', trim : true },
		tag: { type : String, default : '', trim : true },
		date: { type : Date, default : Date.now }
	});

var	PhotoSchema = new Schema({
		title: { type : String, default : '', trim : true },
		comment: { type : String, default : '', trim : true },
		path: { type : String, default : '', trim : true }
	});

var DemoSchema = new Schema({
		title: { type : String, default : '', trim : true },
		intro: { type : String, default : '', trim : true },
		background_img: { type : String, default : '', trim : true },
		path: { type : String, default: '', trim : true },
		download: { type : String, default: '', trim : true },
		screen_shoots: {
			ss_1: { type : String, default : '', trim : true },
			ss_2: { type : String, default : '', trim : true },
			ss_3: { type : String, default : '', trim : true }
		}
	});

mongoose.model('Blog', BlogSchema);
mongoose.model('Photo', PhotoSchema);
mongoose.model('Demo', DemoSchema);

var	Blogs = mongoose.model('Blog');
var Photos = mongoose.model('Photo');
var Demos = mongoose.model('Demo');

var info_en = JSON.parse(fs.readFileSync('english.json', 'utf8'));

router.get('/', function(req, res) {
    res.redirect('/en');
});

router.get('/en', function(req, res) {
	async.parallel({
			blogs: function(cb) {
				Blogs.find({}, cb);
			},
			photos: function(cb) {
				Photos.find({}, cb);
			},
			demos: function(cb) {
				Demos.find({}, cb);
			}
		}, function(err, result) {
		if(err) {
			res.send("500");
			return;
		}
		res.render('index', {
			info: info_en,
			result: result
		});
	});
});

module.exports = router;