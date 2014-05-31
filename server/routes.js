var Days = require('./models/days');


// Get all the Days
module.exports = function (app) {
	app.get('/api/days', function(req, res) {
		Days.find(function (err, days) {
			if(err) {
				res.send(err);
			} else {
				res.json(days); // return all the Days
			}
		});
	});

};
