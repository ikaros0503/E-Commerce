initListener = function() {

	$('.btn-register').unbind().click(function(){
		$('.fade-ground').addClass('in');
		show($('.register-modal'), function(){
			initRegisterModal();
			$('.register-modal').find('.btn-cancel').unbind().click(function(){
				hide($('.register-modal'));
			});
		});
	});

	$('.btn-login').unbind().click(function(){
		show($('.login-modal'), function(){
			initLoginModal();
			$('.login-modal').find('.btn-cancel').unbind().click(function(){
				hide($('.login-modal'));
			});
		});
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
	$('.text-search').unbind().keyup(function(e){
		if (e.keyCode == 13) {
			var name = $(this).val();
			$('.container').fadeOut(200,function(){
				$(this).load('templates/showproduct.html',function(){
					$(this).css('width','72%');
					getProductByName(name);
					$('.module-header.show-product h2').html("SEARCH RESULT");
					$(this).fadeIn(200, function(){});
				});
			})
		}
	});

}

renderResult = function(_results) {
	var modal = $('.container');
	modal.find('.total-product').html(_results.length - 1);
	var body = modal.find('.display-product');
	body.html("");
	$.each(_results, function(_,result){
		if (result.ProductId != undefined) {
			var item = resultProductTpl;
			$.each(result, function(key,val){
				var regex = new RegExp('{'+key+'}', "igm")
				if (key == "ProductImg") {
					if (val) {
						var showImg = val.split('|')[0];
						val = showImg;
					}
				}
				item = item.replace(regex,val)
			});
			body.append(item);
			bindEventOnShowProduct(result);
		}
	});
}

bindEventOnShowProduct = function(item){
	if (item.OwnerId != user.Id) {
		$('.btn-remove').addClass('hidden').prop('disabled',true);
		$('.btn-edit').addClass('hidden').prop('disabled',true);
	}
	$('.btn-remove').unbind().click(function(){
		var name = $(this).parent().parent().find('div.product-name').html();
		var id = $(this).parent().parent().attr('data-id');
		showConfirm("Bạn thực sự muốn xóa sản phẩm " + name + "?", function(e){
			$('.btn-confirm').unbind().click(function(){
				var obj = {};
				obj['Id'] = id;
				obj['IsPrgStatus'] = 4;
				$.ajax({
					url:'Core/update-product.php',
					method:'post',
					data: obj,
					success: function(data) {
						$('.confirm-modal').removeClass('in');
						if (data != "ERROR") {
							showSuccessful('Remove product successfully');
							getProductById(user.Id);
						} else {
							showError('An error has occur! Please try again!')
						}
					}
				})
			});
		});
	});

	$('.btn-edit').unbind().click(function(e){
		var id = $(this).parent().parent().attr('data-id');
		$('.container').fadeOut(200, function(){
			$('.container').load('templates/addProduct.html',function(e){
				for (var i = 1; i < yourproduct.length; i++) {
					if (id == yourproduct[i].ProductId){
						renderEditForm($('.container'),yourproduct[i]);
						bindEventOnEditForm($('.container'),id);
						break;
					}
				}
				$(this).fadeIn(200,function(){});
			});
		})
	});

	$('.display-product .image-preview').unbind().click(function(e){
		var id = $(this).parent().attr('data-id');
		$('.pass-product-bar').find('.pass-product[data-id='+id+']').addClass('selected');
		$('.content .container').fadeOut(200,function(){
			$(this).load('templates/product-tpl.html',function(){
				renderProduct(id);
				initSlider(id);
				initEventForSlider();
				initEventToBidButton(id);
				initCountdown(id);
				$(this).css({
					'width' : '60%',
				}).fadeIn(200,function(){
				});
			});
		});
	});

}



renderEditForm = function(form, data) {
	form.find('.module-header h2').html(data.Name);
	form.find('.button').addClass('hidden').prop('disabled',true);
	var showImg = [];
	var img = form.find('.image-preview');
	$.each(data.ProductImg.split('|'),function(_,img){
		if (img != "") {
			showImg.push(img);
		}
	});
	for (var i = 0; i < showImg.length; i++) {
		$(img[i]).html('<img src="img/product/'+data.ProductId+'/'+showImg[i]+'" style="width:100px; height:100px;">');
	}
	for (var i = showImg.length; i < img.length;i++){
		$(img[i]).addClass('hidden');
	}
	form.find('input[name="StartPrice"]').prop('disabled',true);
	form.find('input[name="ProductName"]').val(data.Name);
	form.find('select').val(data.Type);
	form.find('textarea').val(data.Info).css('height',"230px");
	form.find('input[name="Duration"]').val(data.Duration);
	form.find('.btn.add-product').html('<b>Save</b>');
}

bindEventOnEditForm = function(form, id){
	form.find('.btn.add-product').unbind().click(function(){
		var duration = form.find('input[name="Duration"]').val();
		var info = form.find('textarea').val();
		var type = form.find('select').val();
		var name = form.find('input[name="ProductName"]').val();
		var obj = {};
		obj['Duration'] = duration;
		obj['Type'] = type;
		obj['Info'] = info;
		obj['Id'] = id;
		obj['Name'] = name;
		$.ajax({
			url:'Core/update-product.php',
			method:'post',
			data: obj,
			success: function(data){
				if (data != "ERROR") {
					showSuccessful("Update product successfully!");
					$('a[href="#showProduct"]').click();
				} else {
					showError("An error occur! Please try again!");
				}
			}
		})
	});
}