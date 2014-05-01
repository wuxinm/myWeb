var express = require('express'),
	router = express.Router(),
	fs = require('fs'),
	mongoose = require('mongoose'),
	Blogs = mongoose.model('Blog'),
	async = require('async')

var info_en = JSON.parse(fs.readFileSync('english.json', 'utf8'));

/* GET blog listing. */
router.get('/', function(req, res) {
	async.parallel({
		blogs: function(cb) {
			Blogs.find({}, cb);
		}
	}, function(err, result) {
		if (err) {
			res.send("500");
			return;
		}
		res.render('blog/blog_index', {
			info: info_en,
			result: result
		});
	});
});

router.get('/new', function(req, res) {
	res.render('blog/new', {
		title: 'New Blog',
		subtitle: 'Record better life',
		info: info_en,
		blog: new Blogs({})
	});
});

router.post('/', function(req, res) {
	var b = req.body;
	new Blogs({
		title: b.title,
		body: b.body,
		tag: b.tag
	}).save(function(err) {
		if(err)
			res.json(err);
		res.redirect('/blog');
	});
});

router.get('/:id', function(req, res) {
	Blogs.findOne({ _id:req.params.id }, function(err, blog) {
		if(err)
			res.json(err);
		res.render('blog/form', {
			title: 'Show Blog',
			subtitle: 'Record better life',
			info: info_en,
			blog: blog
		});
	});
});

router.post('/:id', function(req, res) {
	var b = req.body;
	Blogs.update({ _id:req.params.id }, {
		title: b.title,
		body: b.body,
		tag: b.tag
	}, function(err) {
		if(err)
			res.json(err);
		res.redirect('/blog');
	});
});

router.get('/:id/edit', function(req, res) {
	Blogs.findOne({ _id:req.params.id }, function(err, blog) {
		if(err)
			res.json(err);
		res.render('blog/edit', {
			title: 'Edit Blog',
			subtitle: 'Editing ' + blog.title,
			info: info_en,
			blog: blog
		});
	});
});

router.post('/:id/delete', function(req, res) {
	Blogs.remove({ _id:req.params.id }, function(err) {
		if(err)
			res.json(err);
		res.redirect('/blog');
	});
});

module.exports = router;