initPassproduct = function(){
	$('.product.pass-product').unbind().click(function(e){
		var id = $(this).attr('data-id');
		if (id == -1) return;
		if ($(this).hasClass('selected')) return;
		$('.product.pass-product').removeClass('selected');
		var product = $(this);
		var isSelect = true;
		if (product.hasClass('selected')) {
			product.removeClass('selected');
			isSelect = true;
		} else {
			product.addClass('selected');
			isSelect = false;
		}
		
		$('.content .container').fadeOut(200,function(){
			if (isSelect) {
				$('.content .container').load('templates/banner.html',function(){
					initListener();
					$(this).css({
						'width' : '72%',
					}).fadeIn(200);
				});
			} else {
				$('.content .container').load('templates/product-tpl.html',function(){
					console.log('OK');
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
			}
		});
	});
}

function initSlider(id) {
	var product = {};
	for (var i = 1; i < products.length; i++) {
		if (products[i].ProductId == id) {
			product = products[i]
			break;
		}
	}
	var imgs = product.ProductImg.split('|')
	var slider = "";
	$.each(imgs,function(_,img){
		if (img != '') {
			var url = "img/product/"+product.ProductId+"/"+img;
			var li = "<li><img src="+url+"></li>"
			slider += li;
		}
	});
	$('.show-product-image').find(".image-slider ul").append(slider);
}

function initEventForSlider() {
	$('.show-product-image').find('.image-slider').find('li').unbind().click(function(){
		if ($(this).hasClass('active')) return;
		var img = $(this).find('img').attr('src');
		$('li.active').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.show-product-image').find('.image-view').fadeOut(200,function(){
			$(this).html("").append('<img src="'+img+'">').fadeIn(200);
		});
	});
	$('.show-product-image').find(".image-slider ul li:first-child").click();
}

function renderProduct(id) {
	var product = getCurrentProduct(id);
	var product_view = $('.product.product-details');
	product_view.find('.product-name').html(product.Name);
	product_view.find('.author').html(product.Username);
	product_view.find('.product-info .info').val(product.Info);
	product_view.find('.product-price').html(toMoney(product.CurrentPrice)+'đ');
	if (product.Type != 2) {
		product_view.find('span.total-bet').html(product.TotalBet);
		product_view.find('span.current-user').html(product.CurrentUser);
	} else {
		product_view.find('span.total-bet').closest('div').addClass('hidden');
	}
}

function getCurrentProduct(id) {
	for (var i = 1; i < products.length; i++) {
		if (products[i].ProductId == id) {
			return products[i];
		}
	}
}

toMoney = function(price) {
	var priceTemp = "";
	while (price != "") {
		priceTemp += price.substr(0,price.length % 3 == 0 ? 3 : price.length % 3);
		if (price.length > 3)
			priceTemp += '.';
		price = price.substr(price.length % 3 == 0 ? 3 : price.length % 3, price.length - 1);
	}
	return priceTemp;
}

function initEventToBidButton(id) {
	var product = getCurrentProduct(id);
	if (!isLogin) {
		$('.btn-bet').prop('disabled',true).html("Vui lòng đăng nhập để đấu giá!");
		return;
	}
	if (product.IsPrgStatus != 1) {
		$('.btn-bet').addClass('hidden').prop('disabled',true);
		return;
	}
	$('.btn-bet').unbind().click(function(){
		showBet(function(){
			var img = "";
			$.each(product.ProductImg.split('|'), function(_,imgs){
				if (imgs != '') {
					img = imgs;
					return;
				}
			});
			var modal = $('.bet-modal');
			var url = '<img style="width:100px; height:100px" src="img/product/'+product.ProductId+'/'+img+'">';
			modal.find('.image-preview').html(url);
			modal.find('.product-name').html(product.Name);
			modal.find('.product-price').html(toMoney(product.CurrentPrice)+'đ');
		}, 
		function(){
			var modal = $('.bet-modal');
			modal.find('input[name="Price"]').unbind().keyup(function(){
				var price = $(this).val();
				price = price.replace(/\./g,'');
				if (price >= 1000) {
					$(this).val(toMoney(price));
				}
			}).keydown(function(e){
					var charCode = e.keyCode
					if (charCode > 31 && (charCode < 48 || charCode > 57))
						return false;
			});

			modal.find('.btn-confirm').unbind().click(function(){
				var price = modal.find('input[name="Price"]').val();
				price = price.replace(/\./g,'')
				if (parseInt(price) <= parseInt(product.CurrentPrice)) {
					$('.error-message').html('Giá nhập không được nhỏ hơn giá hiện tại').removeClass('hidden');
					$('input[name="Price"]').addClass('error');
				} else {
					$('.error-message').addClass('hidden');
					$('input[name="Price"]').removeClass('error');
					var obj = {};
					obj.Name = "fBet";
					obj.Data = {};
					obj.Data['ProductId'] = product.ProductId;
					obj.Data['CurrentPrice'] = price;
					obj.Data['CurrentUser'] = user.Username;
					obj.Data['History'] = getHistory(product,price);
					vRqs(obj, function(data){
						modal.removeClass('in');
						if (data == 1) {
							showSuccessful(message["Bid"][data])
							$('a[href="#home"]').click();
						} else {
							showError(message["Bid"][data]);
						}
					});
				}
			});
		});
	});
}

function initCountdown(id) {
	var product = getCurrentProduct(id);
	if (Date.parse(product.ExpireTime) <= Date.parse(new Date()) && product.IsPrgStatus == 2) {
		var obj = {};
 		obj.Name = "UpdateProduct";
 		obj.Data = {};
 		obj.Data['Id'] = id;
 		obj.Data['IsPrgStatus'] = 3;
 		vRqs(obj, function(){
 			reloadProduct();
 			initEventToBidButton();
 			initCountdown();
 		});
 		return;
	}
	if (product.IsPrgStatus != 1) {
		if (product.IsPrgStatus == 2 ) {
			$('.countdown').html('Sản phẩm đang chờ đấu giá');
		} else if (product.IsPrgStatus == 3) {
			$('.countdown').html('Sản phẩm đã được đấu giá thành công!');
		}
		return;
	};
		$('.countdown').countdown(product.ExpireTime, function(event) {
   			$(this).html(event.strftime('%D ngày %H giờ %M phút %S'));
 		}).on('finish.countdown',function(event){
 			var obj = {};
 			obj.Name = "UpdateProduct";
 			obj.Data = {};
 			obj.Data['Id'] = id;
 			obj.Data['IsPrgStatus'] = 3;
 			vRqs(obj, function(){
 				reloadProduct();
 			});
 		});
}

Date.prototype.addHours= function(h){
	h = parseInt(h);
    var copiedDate = new Date(this.getTime());
    copiedDate.setHours(copiedDate.getHours()+h);
    return copiedDate;
}

Date.prototype.convertFormat = function() {
	var year = this.getFullYear();
	var month = this.getMonth()+1;
	var dates = this.getDate();
	var hours = this.getHours();
	var minutes = this.getMinutes();
	var second = this.getSeconds();
	var fullString = year+'/'+month+'/'+dates+' '+hours+':'+minutes+':'+second;
	return fullString;
}

function getHistory(product, price) {
	var history = product.History;
	if (history == null) history = "";
	history = history + user.Id + '|' + user.Username + '|' + (new Date()).convertFormat()+'|'+price + '~';
	return history;
}

renderResult = function(_results, bidUser) {
	var modal = $('.container');
	modal.find('.total-product').html(_results.length - 1);
	var body = modal.find('.display-product');
	if (bidUser != undefined && bidUser) {
		body.addClass('bid-user');
		modal.find('.module-header h2').html('SẢN PHẨM ĐÃ ĐẤU GIÁ');
	}
	body.html("");
	$.each(_results, function(_,result){
		console.log(result);
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
			if (bidUser != undefined && bidUser) {
				var history = result.History.split('~');
				for (var i = history.length - 1; i >= 0; i--) {
					if (history[i].indexOf(user.Username) >= 0) {
						item = item.replace('{BidDate}',history[i].split('|')[2])
						item = item.replace('hidden','');
						item = item.replace('{Price}',toMoney(history[i].split('|')[3])+'đ');
						item = item.replace('hidden','');
					}
				}
			}
			body.append(item);
			bindEventOnShowProduct(result);
		}
	});
}

bindEventOnShowProduct = function(item){
	if (item.OwnerId != user.Id || ($('.show-product').find('.display-product').hasClass('bid-user'))) {
		$('.btn-remove').addClass('hidden').prop('disabled',true);
		$('.btn-edit').addClass('hidden').prop('disabled',true);
	}
	$('.btn-remove').unbind().click(function(){
		var name = $(this).parent().parent().find('div.product-name').html();
		var id = $(this).parent().parent().attr('data-id');
		showConfirm("Bạn thực sự muốn xóa sản phẩm " + name + "?", function(e){
			$('.btn-confirm').unbind().click(function(){
				var obj = {};
				obj.Name = "UpdateProduct";
				obj.Data = {};
				obj.Data['Id'] = id;
				obj.Data['IsPrgStatus'] = 4;
				vRqs(obj, function(data){
					$('.confirm-modal').removeClass('in');
					if (data != "ERROR") {
						showSuccessful('Remove product successfully');
						getProductById(user.Id);
					} else {
						showError('Có lỗi xảy ra, vui lòng thử lại');
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
		obj.Name = "UpdateProduct";
		obj.Data = {};
		obj.Data['Duration'] = duration;
		obj.Data['Type'] = type;
		obj.Data['Info'] = info;
		obj.Data['Id'] = id;
		obj.Data['Name'] = name;
		vRqs(obj, function(data){
			if (data == 1) {
				showSuccessful(message["Update_Product"][data]);
				$('a[href="#showProduct"]').click();
			} else {
				showError(message["Update_Product"][data]);
			}
		});
	});
}