initListener = function() {
	
	$('.scroll-bar').unbind().hover(function(e){
		$(this).css('background-image','linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%)');
	}).mouseleave(function(e){
		$(this).css('background-image','none');
	});

	$('.jcarousel').jcarousel({
		wrap: 'circular'
	});

	$('.jcarousel-pagination')
	.on('jcarouselpagination:active', 'a', function() {
		$(this).addClass('active');
	})
	.on('jcarouselpagination:inactive', 'a', function() {
		$(this).removeClass('active');
	})
	.jcarouselPagination();


	$('.prev-stage')
	.on('jcarouselcontrol:inactive', function() {
		$(this).addClass('inactive');
	})
	.on('jcarouselcontrol:active', function() {
		$(this).removeClass('inactive');
	})
	.jcarouselControl({
		target: '-=1'
	});


	$('.next-stage')
	.on('jcarouselcontrol:inactive', function() {
		$(this).addClass('inactive');
	})
	.on('jcarouselcontrol:active', function() {
		$(this).removeClass('inactive');
	})
	.jcarouselControl({
		target: '+=1'
	});

	$('.btn-register').unbind().click(function(){
		$('.fade-ground').addClass('in');
		show($('.register-modal'), function(){
			$('.register-modal').find('.btn-cancel').unbind().click(function(){
				hide($('.register-modal'));
			});
		});
	});
}