$(function(){
	$('.sidenav').sidenav();
	$('.modal').modal();
	$('.materialboxed').materialbox();
	$('.parallax').parallax();
	$('.tabs').tabs();
	$('.datepicker').datepicker({
		
	});
	$('.scrollspy').scrollSpy();
});

let toggle=1;
function toggler(){
	if(toggle)
		darkMode();
	else
		lightMode();
	toggle=!toggle;
}

function darkMode(){
	$('#intro>div, #skills>div, #work>div>div>div, .tabs,form').css({
	   'background' : '#333',
	   'color' : '#fff',
	   'box-shadow': '0 -2px 10px rgba(0, 0, 0, 1)'
	});
	$('body').css({
	   'background' : '#121212',
	   'color' : '#fff'
	});
	$('#intro').css({
	   'background' : '#1A1A1A',
	   'color' : '#fff'
	});
}
function lightMode(){
	$("#intro>div, #skills>div, #work>div>div>div, .tabs, form, body, #intro").removeAttr("style");
}