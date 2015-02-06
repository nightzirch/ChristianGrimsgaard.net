/* Author: Christian Grimsgaard
   
   For sending emails
*/

var email = {
	form: {
		validForm: false,
		errorFound: false,
		url: "send_email.php",
		
		obj: 'form[name=contact-form]',
		nameObj: 'form[name=contact-form] input[name=name]',
		emailObj: 'form[name=contact-form] input[name=email]',
		subjectObj: 'form[name=contact-form] input[name=subject]',
		messageObj: 'fform[name=contact-form] textarea[name=message]',
		
		send: function() {
			var name = cg.form.name.value();
			var email = cg.form.email.value();
			var subject = cg.form.subject.value();
			var message = cg.form.message.value();
			
			// Send the data using post and put the results in a div
			$.ajax({
				type: 'POST',
				url: cg.form.url,
				data: {
					name: name,
					email: email,
					subject: subject,
					message: message
				}
			}).done(function(data) {
				alert("Your message was sent successfully");
			}).error(function() {
				alert("Your message failed to send");
			});
		},
		check: function() {
			cg.form.errors.reset();
			cg.form.name.validate();
			cg.form.email.validate();
			cg.form.subject.validate();
			cg.form.message.validate();
			
			cg.form.validForm = cg.form.errors.check();
			
			if(cg.form.validForm) {
				cg.form.send();
			}
			
			return false;
		},
		errors: {
			reset: function() {
				$(cg.form.nameObj).removeClass('error');
				$(cg.form.emailObj).removeClass('error');
				$(cg.form.subjectObj).removeClass('error');
				$(cg.form.messageObj).removeClass('error');
			},
			check: function() {
				this.validForm = true;
				
				if(cg.form.name.error() || cg.form.email.error() || cg.form.subject.error() || cg.form.message.error()) {
					this.validForm = false;
				}
				
				return this.validForm;
			}
		},
		name: {
			valid: function() {
				return !$(cg.form.nameObj).hasClass('error');
			},
			error: function() {
				return $(cg.form.nameObj).hasClass('error');
			},
			value: function() {
				return $(cg.form.nameObj)[0].value;
			},
			validate: function() {
				if($(cg.form.nameObj)[0].value.length < 3) {
					$(cg.form.nameObj).addClass('error');
				}
			}
		},
		email: {
			valid: function() {
				return !$(cg.form.emailObj).hasClass('error');
			},
			error: function() {
				return $(cg.form.emailObj).hasClass('error');
			},
			value: function() {
				return $(cg.form.emailObj)[0].value;
			},
			validate: function() {
				var emailValue = $(cg.form.emailObj)[0].value;
				var emailTemplate = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
				
				// Check if the email match the email template
				if(!emailValue.match(emailTemplate)){
					$(cg.form.emailObj).addClass('error');
				}
			}
		},
		subject: {
			valid: function() {
				return !$(cg.form.subjectObj).hasClass('error');
			},
			error: function() {
				return $(cg.form.subjectObj).hasClass('error');
			},
			value: function() {
				return $(cg.form.subjectObj)[0].value;
			},
			validate: function() {
				if($(cg.form.subjectObj)[0].value.length < 3) {
					$(cg.form.subjectObj).addClass('error');
				}
			}
		},
		message: {
			valid: function() {
				return !$(cg.form.messageObj).hasClass('error');
			},
			error: function() {
				return $(cg.form.messageObj).hasClass('error');
			},
			value: function() {
				return $(cg.form.messageObj)[0].value;
			},
			validate: function() {
				if($(cg.form.messageObj)[0].value.length < 10) {
					$(cg.form.messageObj).addClass('error');
				}
			}
		}
	}
}