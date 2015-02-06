var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	
	// Get the projects
	view.on('init', function(next) {
		var q = keystone.list('Project').model.find({});

		q.exec(function(err, result) {
			locals.projects = result;

			// If there are no results
			if(!result) {
				req.flash('error', "No projects were found in the database.");
			}

			next(err);
		});
	});
	
	// Render the view
	view.render('index');
};
