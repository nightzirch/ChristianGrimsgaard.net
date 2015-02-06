$(document).ready(function(){
	url_listener();
	state_check();
	header_listener();
	main_menu();
	discover();
});

function url_listener() {
	$(window).bind('hashchange', function() {
		state_change(window.location.hash);
	});
}

function state_check() {
	if(window.location.hash) {
		var hash = window.location.hash.split('#')[1];
		$('header').addClass('subpage');
		main_menu_image_placement();
		
		var nav = $('header nav');
		$('#discover').before(nav);
		$('#main_menu .dropshadow[name=' + hash + ']').addClass('active');
				
		state_change(window.location.hash);
	}
	else {
		$('#wrap header bdi#discover_me').addClass('active');
		$('#wrap header bdi#discover_me').fadeIn(10);
	}
}

function state_change(hash) {
	if(hash.length > 1) {
		var hash = window.location.hash.split('#')[1];
		$('#wrap header bdi#discover_' + hash).addClass('active');
		$('#wrap header bdi#discover_' + hash).fadeIn(10);
		
		loading(true);
		$('#content').load(hash + '.html', function() {
			$('#content').fadeIn(250);
			loading(false);
		});
		$('#content').attr('class', '').addClass(hash);
	}
}

function main_menu() {
	main_menu_image_placement();
	main_menu_listeners();
}

function header_listener() {
	$('#header_image img').on('click', function(){
		window.location.search = "";
		window.location = "";
	});
}

function main_menu_image_placement() {
	var list_elements = $('#main_menu .main_menu_item .item_background');
	var size;

	size = $('#main_menu .dropshadow').first().width();
	
	for(var i = 0; i < list_elements.length; i++) {
		var image = $(list_elements[i]);
		var image_height = $(image).height();
		var image_width = $(image).width();
		
		var margin_top = ((size - image_height) /2);
		var margin_left = ((size - image_width) /2);
		
		$(image).css('margin-top', margin_top);
		$(image).css('margin-left', margin_left);
	}
}

function main_menu_listeners() {
	$('#main_menu .dropshadow').on('click', function(){
		if (!$('header').hasClass('subpage')) {
			$('#discover').fadeOut(250);
			$('#discover').fadeIn(250);
			
			$('#main_menu').fadeOut(250, function() {				
				$('header').addClass('subpage');
				main_menu_image_placement();
				
				var nav = $('header nav');
				$('#discover').before(nav)
				
				$('#main_menu').fadeIn(250);
			});
		}
		
		if(!$(this).hasClass('active')) {
			var current_item = this;
			$('#main_menu .dropshadow').removeClass('active');
			$(this).toggleClass('active');
			
			
			$('#content').fadeOut(250, function() {
				loading(true);
				$(this).empty();
				window.location.hash = $(current_item).attr('name');
				$('#content').delay(250).fadeIn(250);
				//loading(false);
			});
		}
	});
}

function discover() {
	$('#main_menu .dropshadow').on('mouseenter', function() {
		var current_item = $(this).attr('name');
		
		if(!$('#wrap header bdi#discover_' + current_item).hasClass('active')) {
			$('#wrap header bdi.active').fadeOut(250);
			$('#wrap header bdi.active').removeClass('active');
			
			$('#wrap header bdi#discover_' + current_item).addClass('active');
			$('#wrap header bdi#discover_' + current_item).fadeIn(250);
		}
	});
	
	$('#main_menu').on('mouseleave', function() {
		if(window.location.hash.length > 1) {
			var hash = window.location.hash.split('#')[1];
			var current_item = $('#discover .active').attr('name');
			
			if(hash != current_item) {
				var hash = window.location.hash.split('#')[1];
				
				$('#wrap header bdi.active').fadeOut(250);
				$('#wrap header bdi.active').removeClass('active');
			
				$('#wrap header bdi#discover_' + hash).addClass('active');
				$('#wrap header bdi#discover_' + hash).fadeIn(250);
			}
		}
		else {
			$('#wrap header bdi.active').fadeOut(250);
			$('#wrap header bdi.active').removeClass('active');
			
			$('#wrap header bdi#discover_me').addClass('active');
			$('#wrap header bdi#discover_me').fadeIn(250);
		}
	});
}

function loading(status) {
	if (status) {
		$('#loading').fadeIn(250);
		loading_animate();
	}
	else {
		$('#loading').fadeOut(250);
//		$('#content').fadeIn(250);
		clearTimeout(loading_animation);
	}
}

var loading_animation;
var loading_animate_i = 0;

function loading_animate(){
	var loading_dots = $('#loading bdi');
	
	if (loading_animate_i >= loading_dots.length) {
		$(loading_dots).fadeOut(250);
	}
	else {
		$(loading_dots[loading_animate_i]).fadeIn(250);
	}
	
	if (loading_animate_i >= loading_dots.length) {
		loading_animate_i = 0;
	}
	else {
		loading_animate_i++;
	}
	
	loading_animation = setTimeout("loading_animate()", 500);
}


















