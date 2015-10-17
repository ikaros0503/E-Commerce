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
		var listImage = [];
		var productName = $('.container input[name="ProductName"]').val();
		var productDetail = $('.container textarea').val();
		var startPrice = $('.container input[name="StartPrice"]').val();
		var duration = $('.container input[name="Duration"]').val();
		var typeOfAuction = $('.container select').val();
		startPrice = startPrice.replace(/\./g,'');
		var obj = {};
		obj["ProductName"] = productName;
		obj["ProductDetail"] = productDetail;
		obj["StartPrice"] = startPrice;
		obj["Duration"] = duration;
		obj["TypeOfAuction"] = typeOfAuction;
		obj["OwnerId"] = user.Id;
		var modal = $('.modal-region');
		showConfirm("You want to add this product?", function(){
			$('.confirm-modal .btn-confirm').unbind().click(function() {
				$('.confirm-modal').removeClass('in');
					modal.load('modal/waiting.html', function(){
						$('.waiting-modal').addClass('in');
						$.ajax({
							url:'Core/add-product.php',
							method:'post',
							dataType:'json',
							data: obj,
							success: function(data){
								if (data != "ERROR") {
									$('#upload_file').attr('data-id',data);
									$('#upload_file').submit();
								} else {
									alert('ERROR_2');
								}
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
			$.ajax({
				type:'POST',
				url: $(this).attr('action'),
				data:formData,
				contentType: false,
				processData: false,
				success:function(data){
					clearAll();
					$('.waiting-modal').removeClass('in');
					showSuccessful("Add product success!");
				},
			});
		});

		$('input[name="StartPrice"]').unbind().keyup(function(e){
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