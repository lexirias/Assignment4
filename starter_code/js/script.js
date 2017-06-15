$(document).ready(function(){

$(".readmore a").click(showMore);
$(".readless a").click(showLess);

function showMore(){
	event.preventDefault();
	$('#show-this-on-click').slideDown();
	$('.readless').show();
	$('.readmore').hide();
}

function showLess(){
	event.preventDefault();
	$('.readless').hide();
	$('.readmore').show();
	$('#show-this-on-click').slideUp();

}

$(".readmore2 a").click(showMore2);
$(".readless2 a").click(showLess2);

function showMore2(){
	event.preventDefault();
	$('#show-this-on-click2').slideDown();
	$('.readless2').show();
	$('.readmore2').hide();
}

function showLess2(){
	event.preventDefault();
	$('.readless2').hide();
	$('.readmore2').show();
	$('#show-this-on-click2').slideUp();

}

});