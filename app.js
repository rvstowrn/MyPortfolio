$(function(){
	AOS.init();
	$('.sidenav').sidenav().on('click tap', 'li a', () => {
            $('.sidenav').sidenav('close');
    });
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
	$('#intro, .sidenav').css({
	   'background' : '#1A1A1A',
	   'color' : '#fff'
	});
	$('.sidenav>li>a').css({ 'color':'unset' });

}
function lightMode(){
	$("#intro>div, #skills>div, #work>div>div>div, .tabs, form, body, #intro, .sidenav, a").removeAttr("style");
}