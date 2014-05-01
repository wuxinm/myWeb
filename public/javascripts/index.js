var myPhoto_count = 1;
var slider_count

$(document).ready(function() {

	$('body').scrollspy({
		target: '.navbar'
	});

	// navigation click actions
	$('.scroll-link').on('click', function(event) {
		// event.preventDefault();
		var sectionID = $(this).attr('data-id');
		scrollToID('#' + sectionID, 700);
		$(this).parent.addClass('active');
	});

	// slider
	$('.carousel').carousel()

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

	setTimeout(function() {
		$('#slider-h1').removeClass('slider-h1-hide').addClass('slider-h1-show');
	}, 2000);
	setTimeout(function() {
		$('#slider-h2').removeClass('slider-h2-hide').addClass('slider-h2-show');
	}, 3000);
	setTimeout(function() {
		$('#slider-h3').removeClass('slider-h3-hide').addClass('slider-h3-show');
	}, 4000);
	setInterval(changeProfilePhoto, 5000);

	skillsProgressBarFade();
});

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
	}, 500);
	scale = 0;
	setTimeout(function() {
		if (scale === 0) {
			scaleToOne();
		}
	}, 500);

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
	$('.ex_block .group' + count).fadeIn(1000);

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