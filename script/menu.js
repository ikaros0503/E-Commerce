initializeMenu = function(){
	$('.tool-box > ul > li').each(function(index, element){
		img = "icon/settings-25x25.png";
		if ($(this).find('a[href="#home"]').length > 0) 
			img = "icon/home-25x25.png";
	  var content = '<span class="cnt">' + '<img src="'+img+'" style="width:20px; height:20px">' + '</span>';
	  $(element).closest('li').children('a').append(content);
	});

	bindEventOnMenu();
	showMenuBar();
}

bindEventOnMenu = function(){
	$('.hide-tool-box').unbind().click(function(){
		if ($(this).hasClass('hide')) {
			hideMenuBar(true);
			$(this).removeClass('hide').find('a').html('&gt;&gt;&gt;');
		} else {
			showMenuBar(true);
			$(this).addClass('hide').find('a').html('&lt;&lt;&lt;');
		}
	});
	$('.tool-box > ul > li > a').click(function() {
		var checkElement = $(this).next();
		//$('.tool-box li').removeClass('active');
		$(this).closest('li').addClass('active'); 

		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			$(this).closest('li').removeClass('active');
			checkElement.slideUp('normal');
		}
		if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
			//$('.tool-box ul ul:visible').slideUp('normal');
			checkElement.slideDown('normal');
		}
		if($(this).closest('li').find('ul').children().length == 0) {
			return true;
		} else {
			return false; 
		}
	});
}

showMenuBar = function(isLogin){
	var menu = $('.tool-box');
	menu.addClass('in');
}

hideMenuBar = function(isLogin) {
	var menu = $('.tool-box');
	menu.removeClass('in');
}