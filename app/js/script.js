$(document).ready(function(){

	var btn = $('.b-btnMode__block');	
	var List = $('.HowUseProgramm__block');

    btn.click(function(e) {
        e.preventDefault();
        btn.removeClass('b-btnMode--active');
        $(this).addClass('b-btnMode--active');
        List.toggleClass('HowUseProgramm--notActive');
    });

});





