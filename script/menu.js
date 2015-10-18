initializeMenu = function(){
	$('.tool-box > ul > li').each(function(index, element){
		img = "icon/product-25x25.png";
		if ($(this).find('a[href="#home"]').length > 0) 
			img = "icon/home-25x25.png";
		if ($(this).find('a[href="#accManager"]').length > 0) {
			img = "icon/user-25x25.png";
		}
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
			if ($('.hide-tool-box').hasClass('hide'))
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
				obj.Name = "UpdateAccount";
				obj.Data = {};
				obj.Data['Id'] = user.Id;
				obj.Data['CurrentPassword'] = modal.find('input[name="CurrentPassword"]').val();
				obj.Data['Password'] = modal.find('input[name="Password"]').val();
				vRqs(obj, function(data){
					if (data == 1) {
						showSuccessful(message["Password"][data]);
					} else {
						showError(message["Password"][data]);
					}
				});
				// $.ajax({
				// 	url:'Core/update-account.php',
				// 	method:'post',
				// 	data:obj,
				// 	success: function(data){
				// 		if (data == 1) {
				// 			showSuccessful(message["Password"][data]);
				// 		} else {
				// 			showError(message["Password"][data]);
				// 		}
				// 	}
				// });
			});
		}
		showChangePass(callback);
	});

	$('a[href="#updateInfo"]').click(function(e){
		var callback = function() {
			var modal = $('.update-info-modal');
			$.each(user, function(key,val){
				modal.find('input[name="'+key+'"]').val(val);
			});
			modal.find('.btn-save').click(function(){
				if (validateFormField(modal)) return;
				var obj = {};
				obj.Name = "UpdateAccount";
				obj.Data = {};
				obj.Data['Id'] = user.Id;
				obj.Data['FirstName'] = modal.find('input[name="FirstName"]').val();
				obj.Data['LastName'] = modal.find('input[name="LastName"]').val();
				obj.Data['Phone'] = modal.find('input[name="Phone"]').val();
				obj.Data['Address'] = modal.find('input[name="Address"]').val();
				vRqs(obj, function(data){
					if (data == 1) {
						user.FirstName = obj.Data['FirstName'];
						user.LastName = obj.Data['LastName'];
						user.Phone = obj.Data['Phone'];
						user.Address = obj.Data['Address'];
						console.log(user);
						showSuccessful(message["Info"][data]);
					} else {
						showError(message["Info"][data]);
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

$('a[href="#bidProduct"]').click(function(e){
	$('.pass-product').removeClass('selected');
	$('.container').fadeOut(200,function(){
		$(this).load('templates/showproduct.html', function(){
			$(this).css('width','72%');
			getProductByCurrentUser(user.Username);
			$(this).fadeIn(200,function(){
			});
		});
	});
});
}

showMenuBar = function(isLogin){
	var menu = $('.tool-box');
	menu.addClass('in');
	menu.removeClass('logout');
}

hideMenuBar = function(isLogin) {
	var menu = $('.tool-box');
	if (menu.find('li.accmanager').hasClass('active')) {
		menu.find('a[href="#accManager"]').click();
		$(this).removeClass('active');
	}
	if (menu.find('li.productmanager').hasClass('active')) {
		menu.find('a[href="#productManager"]').click();
		$(this).removeClass('active');
	}
	menu.removeClass('in');
}

