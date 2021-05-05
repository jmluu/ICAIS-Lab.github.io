$(function(){
	
	$(".wp-navi .wp-menu li").hover(function() {
			/* Stuff to do when the mouse enters the element */
			$(this).addClass("i20");
			$(this).siblings().find('.sub-menu').stop(true,true).slideUp(150)
			$(this).children('.sub-menu').stop(true,true).slideDown(200);
	}, function() {
			/* Stuff to do when the mouse leaves the element */
			$(this).removeClass("i20");
			$(this).children('.sub-menu').stop(true,true).slideUp(150);
    });
	
	if ($(".banner").html() == "") {
		$(".banner").addClass("none");
	}else {
		$(".banners").addClass("none");
	}

});
