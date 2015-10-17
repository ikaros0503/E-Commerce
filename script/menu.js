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

	$('a[href="#home"]').click(function(e){
		$('.pass-product').removeClass('selected');
		loadBanner();
	});
	$('a[href="#changePassword"]').unbind().click(function(e){
		var callback = function() {
			var modal = $('.change-password-modal');
			modal.find('.btn-save').unbind().click(function(e){
				if (validateFormField(modal)) return;
				var obj = {};
				obj['Id'] = user.Id;
				obj['CurrentPassword'] = modal.find('input[name="CurrentPassword"]').val();
				obj['Password'] = modal.find('input[name="Password"]').val();
				$.ajax({
					url:'Core/update-account.php',
					method:'post',
					data:obj,
					success: function(data){
						if (data != "ERROR") {
							showSuccessful("Change password successfully!");
						} else {
							showError('An error occur when change password! Please try again!')
						}
					}
				});
			});
		}
		showChangePass(callback);
	});

	$('a[href="#updateInfo"]').click(function(e){
		var callback = function() {
			var modal = $('.update-info-modal');
			$.each(user, function(key,val){
				modal.find('input[name="'+key+'"]').val(val);
				console.log(key,val);
			});
			modal.find('.btn-save').click(function(){
				if (validateFormField(modal)) return;
				var obj = {};
				obj['Id'] = user.Id;
				obj['FirstName'] = modal.find('input[name="FirstName"]').val();
				obj['LastName'] = modal.find('input[name="LastName"]').val();
				obj['Phone'] = modal.find('input[name="Phone"]').val();
				obj['Address'] = modal.find('input[name="Address"]').val();
				$.ajax({
					url:'Core/update-account.php',
					method:'post',
					data:obj,
					success: function(data){
						if (data != "ERROR") {
							user.FirstName = obj['FirstName'];
							user.LastName = obj['LastName'];
							user.Phone = obj['Phone'];
							user.Address = obj['Address'];
							showSuccessful("Update info successfully!");
						} else {
							showError('An error occur! Please try again!')
						}
					}
				});
			});
		}
		showUpdateInfo(callback);
	});
	$('a[href="#addProduct"]').click(function(e){
		$('.pass-product').removeClass('selected');
		$('.container').fadeOut(200,function(){
			$(this).load('templates/addProduct.html', function(){
				$(this).css('width','72%');
				$('.container').fadeIn(300,function(){
					initializeAddProductForm();
				});
			});
		});
	});

	$('a[href="#showProduct"]').click(function(e){
		$('.pass-product').removeClass('selected');
		$('.container').fadeOut(200,function(){
			$(this).load('templates/showproduct.html', function(){
				$(this).css('width','72%');
				getProductById(user.Id);
				$(this).fadeIn(200,function(){

				});
			});
		});
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

