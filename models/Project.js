var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Project Model
 * ==========
 */

var Project = new keystone.List('Project');

Project.add({
	title:      { type: String, required: false, index: true },
    image:      { type: String, required: false },
    url:        { type: String, required: false },
    content:    { type: Types.Markdown, required: false },
    created:    { type: Date, default: Date.now }
});


// Check if project has any content
Project.schema.virtual('hasContent').get(function() {
	return (this.content != nil || this.content != "") ? true : false;
});

// Check if project has URL
Project.schema.virtual('hasURL').get(function() {
	return (this.url != nil || this.url != "") ? true : false;
});

/**
 * Registration
 */

Project.defaultSort = '-created';
Project.defaultColumns = 'title, url, created';
Project.register();
