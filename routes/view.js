var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/resume', function(req, res) {
	var tempFile = 'public/documents/Resume.pdf';
	fs.readFile(tempFile, function(err, data) {
		res.type('application/pdf');
		res.send(data);
	});
});

router.get('/html5game_1', function(req, res) {
	var tempFile = 'public/documents/html5game_1/index.html';
	fs.readFile(tempFile, 'utf8', function(err, data) {
		res.type('html');
		res.send(data);
	});
});

router.get('/html5game_2', function(req, res) {
	var tempFile = 'public/documents/html5game_2/index.html';
	fs.readFile(tempFile, 'utf8', function(err, data) {
		res.type('html');
		res.send(data);
	});
});

module.exports = router;
