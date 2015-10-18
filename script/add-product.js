function bindEvent() {
	$('.product-img .button').unbind().click(function(){
		$(this).parent().find('input:file').click();
	});
	$('.product-img input:file').change(function(e){
		for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
			var file = e.originalEvent.srcElement.files[i];
			var img = $('<img />').css({
				'width': "100px",
				'height': "100px",
			});
			var reader = new FileReader();
			reader.onloadend = function() {
				img.attr('src',reader.result);
			}
			reader.readAsDataURL(file);
			$(this).parent().find('.image-preview').html(img);
		}
	});

	$('button.clear').unbind().click(function(e){
		clearAll();
	});

	$('button.add-product').unbind().click(function(e){
		if (validateFormField($('.container'))) {
			showError('Xin nhập đầy đủ thông tin');
			return;
		}
		var listImage = [];
		var productName = $('.container input[name="ProductName"]').val();
		var productDetail = $('.container textarea').val();
		var startPrice = $('.container input[name="StartPrice"]').val();
		var duration = $('.container input[name="Duration"]').val();
		var typeOfAuction = $('.container select').val();
		// startPrice = startPrice.replace(/\./g,'');
		var obj = {};
		obj.Name = "InsertProduct";
		obj.Data = {};
		obj.Data["ProductName"] = productName;
		obj.Data["ProductDetail"] = productDetail;
		obj.Data["StartPrice"] = startPrice;
		obj.Data["Duration"] = duration;
		obj.Data["TypeOfAuction"] = typeOfAuction;
		obj.Data["OwnerId"] = user.Id;
		var modal = $('.modal-region');
		showConfirm("You want to add this product?", function(){
			$('.confirm-modal .btn-confirm').unbind().click(function() {
				$('.confirm-modal').removeClass('in');
				modal.load('modal/waiting.html', function(){
					$('.waiting-modal').addClass('in');
					vRqs(obj, function(data){
						if (data != "ERROR") {
							$('#upload_file').attr('data-id',data);
							$('#upload_file').submit();
						} else {
							showError(message["Add_Product"][data])
						}
					});
				});
			});
		});
	});

$('#upload_file').on('submit',function(e){
	e.preventDefault();
	var formData = new FormData(this);
	formData.append('Id',$(this).attr('data-id'));
	var obj = {
		Name: "UploadImage",
		Data: formData,
		ContentType:false,
		ProcessData:false,
	}
	// $.ajax({
	// 	url:'upload_image.php',
	// 	method:'post',
	// 	data: formData,
	// 	success: function(data){
	// 		clearAll();
	// 		if (data == 1) {
	// 			$('.waiting-modal').removeClass('in');
	// 			showSuccessful(message["Add_Product"][data]);
	// 		} else {
	// 			showError(message["Add_Product"][data]);
	// 		}
	// 	}
	// });
vRqs(obj, function(data){
	clearAll();
	if (data == 1) {
		$('.waiting-modal').removeClass('in');
		showSuccessful(message["Add_Product"][data]);
	} else {
		showError(message["Add_Product"][data]);
	}
});
});
$('input[name="StartPrice"]').unbind().keydown(function(e){
	var charCode = e.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
}).keyup(function(e){
	var price = $(this).val();
	price = price.replace(/\./g,'');
	if (price >= 1000) {
		$(this).val(toMoney(price));
	}
});
}

initializeAddProductForm = function() {
	bindEvent();
}

function clearAll() {
	$('.container').find('input').val("");
	$('.container').find('.image-preview').html("");
	$('textarea').val("");	
}