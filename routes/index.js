
/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index.html');
};

exports.app = function(req, res) {
	res.render('app.html', { type:req.params.type, time:req.params.time } );
};