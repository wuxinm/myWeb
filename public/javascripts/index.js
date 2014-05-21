var myPhoto_count = 1;
var slider_count

$(window).load(function() {

	$('body').scrollspy({
		target: '.navbar'
	});

	// navigation click actions
	$('.scroll-link').on('click', function(event) {
		var sectionID = $(this).attr('data-id');
		scrollToID('#' + sectionID, 700);
	});

	// slider
	$('.carousel').carousel()

	// slider title
	slide_show();
	$('#aboutme-button').on('click', function(event) {
		var sectionID = $(this).attr('data-id');
		scrollToID('#' + sectionID, 700);
	});

	// stellarJS background img move in different speed
	$.stellar();

	//google-map
	$('#map-content').gMap({
		latitude: +48.421170,
		longitude: -89.260615,
		zoom: 14,
		scrollwheel: true,
		markers: [{
			latitude: +48.421170,
			longitude: -89.260615,
		}]
	});

	// about_me photo animation
	setInterval(changeProfilePhoto, 5000);

	// skills bar fadeInOut animation
	setTimeout(skillsProgressBarFade(), 1000);
});


//slider title animation
function slide_show() {
	setTimeout(function() {
		$('#slider-h1').removeClass('slider-h1-hide').addClass('slider-h1-show');
	}, 1000);
	setTimeout(function() {
		$('#slider-h2').removeClass('slider-h2-hide').addClass('slider-h2-show');
	}, 2000);
	setTimeout(function() {
		$('#slider-h3').removeClass('slider-h3-hide').addClass('slider-h3-show');
	}, 3000);
	setTimeout(function() {
		$('.slider-title a').removeClass('slider-a-hide').addClass('slider-a-show');
	}, 4000);
}

//scroll function for clicking links
function scrollToID(id, speed) {
	var offset = 50;
	var targetOffset = $(id).offset().top;
	var mainNav = $('#main-nav');
	$('html, body').animate({
		scrollTop: targetOffset
	}, speed);
}

/*
	Rotate myPhoto based on Y axis
*/

function changeProfilePhoto() {
	var scale = 1;
	scaleToZero();
	myPhoto_count++;
	if (myPhoto_count > 3) {
		myPhoto_count = 1;
	}
	setTimeout(function() {
		$('.myPhoto img').attr('src', 'images/myphoto_' + myPhoto_count + '.jpg');
	}, 1000);
	scale = 0;
	setTimeout(function() {
		if (scale === 0) {
			scaleToOne();
		}
	}, 1000);

}

function scaleToZero() {
	$('.myPhoto').removeClass('myPhoto_scaleToOne');
	$('.myPhoto').addClass('myPhoto_scaleToZero');
}

function scaleToOne() {
	$('.myPhoto').removeClass('myPhoto_scaleToZero');
	$('.myPhoto').addClass('myPhoto_scaleToOne');
}

/*
	Skills fadeIn
*/

function skillsProgressBarFade() {
	var count = 1;

	setInterval(function() {
		$('.ex_block .group' + count).fadeOut(1000);
		if (count === 2) {
			count = 1;
		} else {
			count++;
		}
		$('.ex_block .group' + count).delay(1000).fadeIn(1000);
	}, 5000);
}