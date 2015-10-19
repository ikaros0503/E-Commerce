var user = {};
var products = {};
var yourproduct = {};
var bidproduct = {};
var isLogin = false;

$(document).ready(function(e){
	loadBanner();
	initListener();
	checkSession();
	reloadProduct();
	autoCheckProduct();
});

checkSession = function(){
	vRqs({
		Name:'fAuthentication'
	}, function(data){
		if (data != "NO_SESSION") {
				loginComplete(data.split('|')[0],data.split('|')[1]);
				isLogin = true;
			}
	});
	// $.ajax({
	// 	url:'Core/authentication.php',
	// 	type: 'get',
	// 	success: function(data){
			
	// 	}	
	// });
};

loginComplete = function(id, username) {
	var obj = {};
	obj.Name = "fGetAccount";
	obj.Data = {};
	obj.Data['Id'] = id;
	vRqs(obj, function(data){
		user = jQuery.parseJSON(data);
			switchToLoginCompletePage();
			isLogin = true;
		});
	// $.ajax({
	// 	url:'Core/getaccount.php',
	// 	method:'get',
	// 	data:obj,
	// 	success: function(data){
			
	// 	}
	// });
};

switchToLoginCompletePage = function(){
	$('.user-account').addClass('hidden');
	$('.user-login-complete').removeClass('hidden');
	$('.user-login-complete').find('.welcome').html("Xin chào, " + user.Username)
	$('.hide-tool-box').fadeIn(100,function(){
		$(this).css('display','flex');
		initializeMenu();
	});
}

reloadProduct = function(){
	var obj = {};
	obj.Name = "fGetProduct";
	vRqs(obj,function(data){
		products = jQuery.parseJSON(data);
		renderListProduct();
		initPassproduct();
	});
}

function renderListProduct() {
	var body = $('.pass-product-bar');
	body.html("");
	var content = "";
	$.each(products, function(_,product){
		if (product && product.ProductId) {
			var template = miniProductTpl;
			$.each(product, function(key,val){
				var regex = new RegExp('{'+key+'}', "igm")
				if (key == "ProductImg") {
					if (val) {
						var showImg = val.split('|')[0];
						val = showImg;
					}
				}
				template = template.replace(regex,val)
			});
			content += template;
		}
	});
	if (products.length < 4) {
		for (var i = 0; i < 4 - products.length; i++) {
			var template = noProductTpl;
			content += template;
		}
	}
	body.append(content);
}

function getProductById(id) {
	var obj = {};
	obj.Name = 'fGetProduct';
	obj.Data = {};
	obj.Data['Id'] = user.Id;
	vRqs(obj,function(data){
		yourproduct = jQuery.parseJSON(data);
		renderResult(yourproduct);
	});
}

function getProductByName(name) {
	var obj = {};
	obj.Name = 'fGetProduct';
	obj.Data = {};
	obj.Data['Name'] = name;
	vRqs(obj, function(data){
		yourproduct = jQuery.parseJSON(data);
		renderResult(yourproduct);
	});
}

function getProductByUser(name) {
	bidproduct = [[]];
	$.each(products, function(_,product){
		if (product.History != undefined && product.History.indexOf(name) >= 0) {
			bidproduct.push(product);
		}
	});
	renderResult(bidproduct,true);
}

loadBanner = function(){
	$('.container').fadeOut(200,function(){
		$('.container').load('templates/banner.html',function(){
			$(this).css('width',"72%");
			$("#owl-example").owlCarousel({
				slideSpeed : 300,
				paginationSpeed : 400,
				singleItem:true,
				navigaionText:false,
				autoPlay:5000,
				pagination:true,
				paginationNumbers:true,
			});
			$(this).fadeIn(200);
		});
	})
	
}

autoCheckProduct = function() {
	setInterval(function(){
		var obj = {};
		obj.Name = 'UpdateProduct';
		vRqs(obj,function(data){
			console.log(data);
		});
	}, 300000);
	
}