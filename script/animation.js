initListener = function() {

	$('.link-register').unbind().click(function(){
		$('.fade-ground').addClass('in');
		show($('.register-modal'), function(){
			initRegisterModal();
			$('.register-modal').find('.btn-cancel').unbind().click(function(){
				hide($('.register-modal'));
			});
		});
	});

	$('.link-login').unbind().click(function(){
		show($('.login-modal'), function(){
			initLoginModal();
			$('.login-modal').find('.btn-cancel').unbind().click(function(){
				hide($('.login-modal'));
			});
		});
	});

	
	$('.text-search').unbind().keyup(function(e){
		if (e.keyCode == 13) {
			var name = $(this).val();
			$('.container').fadeOut(200,function(){
				$(this).load('templates/showproduct.html',function(){
					$(this).css('width','72%');
					getProductByName(name);
					$('.module-header.show-product h2').html("KẾT QUẢ TÌM KIẾM");
					$(this).fadeIn(200, function(){});
				});
			})
		}
	});

}

