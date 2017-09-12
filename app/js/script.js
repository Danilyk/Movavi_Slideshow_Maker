$(document).ready(function(){

	var btn = $('.b-btnMode__block');	
	var List = $('.HowUseProgramm__block');

    btn.click(function() {
    	if (!$(this).hasClass('b-btnMode--active')){
	        btn.removeClass('b-btnMode--active');
	        $(this).addClass('b-btnMode--active');
	        List.toggleClass('HowUseProgramm--notActive');
		}
    });
    $('.fullModeLink').click(function(){
    	btn.removeClass('b-btnMode--active');
	    $('.b-btnMode__fullMode').addClass('b-btnMode--active');
    	List.toggleClass('HowUseProgramm--notActive');
    })
});





