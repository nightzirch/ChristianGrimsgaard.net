/* Author: Christian Grimsgaard

*/

// Executes when the HTML document is done loading
$(document).ready(function() {
    cg.listeners.all();
});

// Executes when everything is done loading
$(window).load(function() {
    cg.content.checkState();
});

var cg = {
    general: {
        random: function(from, to) {
            return Math.ceil(Math.random()*(to-from)+from);
        }
    },
    find: function(el, parent) {
        if (parent) {
            return parent.querySelector(el);
        }
        else {
            return document.querySelector(el);
        }
    },
    findAll: function(el, parent) {
        if (parent) {
            return parent.querySelectorAll(el);
        }
        else {
            return document.querySelectorAll(el);
        }
    },
    class: {
        add: function(el, elClass) {
            if (!el.classList.contains(elClass)) {
                el.classList.add(elClass);
            }
        },
        remove: function(el, elClass) {
            if (el.classList.contains(elClass)) {
                el.classList.remove(elClass);
            }
        },
        toggle: function(el, elClass) {
            if (el.classList.contains(elClass)) {
                el.classList.remove(elClass);
            }
            else {
                el.classList.add(elClass);
            }
        },
        toggleVisibility: function(el) {
            // If el is not null
            if (el) {
                // If visible
                if (el.classList.contains("visible")) {
                    cg.class.remove(el, "visible");
                    cg.class.add(el, "invisible");
                }
                // If invisible
                else if (el.classList.contains("invisible")) {
                    cg.class.remove(el, "invisible");
                    cg.class.add(el, "visible");
                }
                // If called on wrong element
                else {
                    // Do nothing
                }
            }
        }
    },
    listeners: {
        all: function() {
            cg.listeners.url();
            cg.listeners.logo();
            cg.listeners.contact();
            cg.listeners.menu();
        },
        url: function() {
            $(window).on('hashchange', function() {
				cg.content.changeState();
			});
        },
        logo: function() {
            var logo_small = cg.objects.logo_small();
            var logo_small_link = cg.objects.logo_small_link();
            logo_small_link.addEventListener("click", function(event) {
                event.preventDefault();
                
                cg.class.remove(logo_small, "logo-anim-in");
                cg.class.add(logo_small, "logo-anim-out");
            });
        },
        contact: function() {
            var form = cg.objects.form_fragments();
            
            for(var i = 0; i < form.length; i++) {
                // Click on any non-focused fragments
                form.item(i).addEventListener("click", function(event) {
                    // Finding the number of the fragment
                    var number = this.classList.toString().split(" ")[1].split("-")[2];
                    
                    cg.content.contact.focus(number);
                }, false);
                
                // Focus on input or textarea
                var textfield = cg.find("input", form.item(i));
                // Checking if the fragment contains input or textarea
                if (!textfield) {
                    var textfield = cg.find("textarea", form.item(i));
                }
                
                textfield.addEventListener("focus", function(event) {
                    // Finding the number of the fragment
                    var number = this.parentNode.classList.toString().split(" ")[1].split("-")[2];
                    
                    cg.content.contact.focus(number);
                }, false);
            }
        },
        menu: function() {
            var main_menu = cg.objects.main_menu();
            
            for(var i = 0; i < main_menu.length; i++) {
                main_menu.item(i).addEventListener("click", function(event) {
                    // If clicked is not .flipped
                    if(!this.classList.contains("flipped")) {
                       // Find .flipped and flip it!
                        var flipped = cg.find("ul.main-menu[role=navigation] li a.flipped");
                        if(flipped) {
                            flipped.classList.remove("flipped");
                        }
                        
                        this.classList.add("flipped");
                    }
                }, false);
            }
        }
    },
    menu: {
        gotoCurrent: function(hash) {
            // Get hash
            if(!hash) {
				var hash = window.location.hash.split('#')[1];
			}
            
            // If Home is not active
            if(hash != "home") {
                
            }
        }
    },
    logo: {
        animate: function(delay, size) {
            if(size == "small" || !size) {
                var logo = cg.objects.logo_small();
            }
            else if (size == "large") {
                var logo = cg.objects.logo_large();
            }
            
            // If delay is not set
            if(!delay) {
                var delay = 500;
            }
            
            setTimeout(function() {
                // Remove .invisible and .logo-anim-out
                // Add .logo-anim-in
                cg.class.remove(logo, "invisible");
                cg.class.remove(logo, "logo-anim-out");
                cg.class.add(logo, "logo-anim-in");
            }, delay);
        },
        animateOut: function(delay, size) {
            if(size == "small" || !size) {
                var logo = cg.objects.logo_small();
            }
            else if (size == "large") {
                var logo = cg.objects.logo_large();
            }
            
            // Remove .logo-anim-in
            // Add .logo-anim-out
            cg.class.remove(logo, "logo-anim-in");
            cg.class.add(logo, "logo-anim-out");
        }
    },
    content: {
        checkState: function() {
            var hash;
            
			// If there's a hash component in the URL
			if(window.location.hash) {
				hash = window.location.hash.split('#')[1];
			}
			else {
				hash = "home";
			}
            
            // Changing the state
            cg.content.changeState(hash);
            
            // Showing some skin
            cg.content.toggleVisibility();
            
            // Flipping the menu burger
            var menu_item = cg.find("a[href='#" + hash + "']");
            menu_item.click();
		},
        changeState: function(hash) {
			// sets default value
			if(!hash) {
				var hash = window.location.hash.split('#')[1];
			}
            
            // Hide active
			var active = cg.find(".content.visible");
            cg.class.toggleVisibility(active);
            
            // Show new active
            var newActive = cg.find("#" + hash);
            cg.class.toggleVisibility(newActive);
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Specific settings for each page
            switch (hash) {
                case "home":
                    
                    break;
                case "portfolio":
                    
                    break;
                case "about":
                    
                    break;
                case "contact":
                    setTimeout(function() {
                        cg.content.contact.focus(0);
                    }, 750);
                    break;
                default:
                    
                    break;
            }
		},
        loading: function(boolean) {
            // Return if loading is true or false
            // content = #content-container
            var content = cg.objects.content();
            return content.classList.contains("visible");
        },
        toggleVisibility: function() {
            // Show content
            var nav = cg.objects.nav();
            var loading = cg.objects.loading();
            var content = cg.objects.content();
            
            // If the page is visible and is going to loading screen
            if (cg.content.loading()) {
                // Fade out content immediately
                // Fade in loading on timer
                cg.class.toggleVisibility(nav);
                cg.class.toggleVisibility(content);
                
                // Fading out small logo
                cg.logo.animateOut(0, "small");
                    
                // Fading in large logo
                cg.logo.animate(750, "large");
                setTimeout(function() {
                    cg.class.toggleVisibility(loading);
                }, 750);
            }
            else {
                // Fade out loading immediately
                // Fade in content on timer
                cg.logo.animateOut(0, "large");
                cg.class.toggleVisibility(loading);
                
                // Fading in small logo
                cg.logo.animate(750, "small");
                    
                // Fading in content
                setTimeout(function() {
                    cg.class.toggleVisibility(nav);
                    cg.class.toggleVisibility(content);
                }, 750);
            }
        },
        contact: {
            focus: function(i) {
                cg.content.contact.focusFragment(i);
                cg.content.contact.focusInput(i);
            },
            focusFragment: function(i) {
                var fragment = cg.find(".form-fragment-" + i);
                
                // If .form-fragment-i is not .focus
                if(!fragment.classList.contains("focus")) {
                    // Find .focus and remove it!
                    var focus = cg.find(".form-fragment.focus");
                    cg.class.remove(focus, "focus");
                    
                    // Add .focus to this fragment
                    cg.class.add(fragment, "focus");
                }
            },
            focusInput: function(i) {
                var fragment = cg.find(".form-fragment-" + i);
                
                var textfield = cg.find("input", fragment);
                // Checking if the fragment contains input or textarea
                if (!textfield) {
                    var textfield = cg.find("textarea", fragment);
                }
                
                // Focusing the textfield
                textfield.focus();
            }
        }
    },
    form: {
        name: {
            check: function() {
                cg.content.contact.focus(1);
                return false;
            }
        },
        email: {
            check: function() {
                cg.content.contact.focus(2);
                return false;
            }
        },
        subject: {
            check: function() {
                cg.content.contact.focus(3);
                return false;
            }
        },
        message: {
            check: function() {
                
                return false;
            }
        }
    },
	
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
	},
	
    objects: {
        logo_small: function() {
            return cg.find(".logo-container.logo-small a img");
        },
        logo_small_link: function() {
            return cg.find(".logo-container.logo-small a");
        },
        logo_large: function() {
            return cg.find("#loading-container .loading img");
        },
        main_menu: function() {
            return cg.findAll("ul.main-menu[role=navigation] li a");
        },
        nav: function() {
            return cg.find("#nav-container");
        },
        content: function() {
            return cg.find("#content-container");
        },
        loading: function() {
            return cg.find("#loading-container");
        },
        form: function() {
            return cg.find("form[name='contact-form']");
        },
        form_fragments: function() {
            return cg.findAll(".form-fragment");
        }
    }
}