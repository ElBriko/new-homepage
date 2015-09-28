/*Country navigation */

$(function() {

var gate = $(window),
navCountry = $('#navCountry'),
space;

gate.on('load resize', function() {

	clearTimeout(redraw);

	var redraw = setTimeout(function() {
	space = gate.height()-navCountry.outerHeight();
	sortTheFooterOut();
	}, 150);
})
.scroll(sortTheFooterOut);

function sortTheFooterOut() {

	var current = gate.scrollTop(),
	stuck = navCountry.hasClass('fixed');		

	if (current > space) {
	if (!stuck) {
	navCountry.addClass('fixed');
	}
	}
	else if (stuck) navCountry.removeClass('fixed');
}
});

/*Scroll*/

//jQuery for page scrolling feature - requires jQuery Easing plugin

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/* Vertical vertical-vertical-tabs */

$(document).ready(function() {
    $("div.vertical-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.vertical-tab>div.vertical-tab-content").removeClass("active");
        $("div.vertical-tab>div.vertical-tab-content").eq(index).addClass("active");
    });
});

/* Tab color changer 

$('[id*="spain-tab-"]').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
    
    if(this.id=="spain-tab-1"){
        $('body').css('background', 'red');
    }
    else if(this.id=="spain-tab-2"){
        $('body').css('background', 'green');
    }
    else if(this.id=="spain-tab-3"){
        $('body').css('background', 'blue');
    }
});*/

