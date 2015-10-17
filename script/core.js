var user = {};
var products = {};
var yourproduct = {};
var isLogin = false;

$(document).ready(function(e){
	loadBanner();
	initListener();
	checkSession();
	reloadProduct();
});

checkSession = function(){
	$.ajax({
		url:'Core/authentication.php',
		type: 'get',
		success: function(data){
			if (data != "NO_SESSION") {
				loginComplete(data.split('|')[0],data.split('|')[1]);
				isLogin = true;
			}
		}	
	});
};

loginComplete = function(id, username) {
	var obj = {};
	obj['Id'] = id;
	$.ajax({
		url:'Core/getaccount.php',
		method:'get',
		data:obj,
		success: function(data){
			if (data != "ERROR") {
				user = jQuery.parseJSON(data);
				switchToLoginCompletePage();
				isLogin = true;
			}
		}
	})
	// switchToLoginCompletePage();
	// isLogin = true;
};

switchToLoginCompletePage = function(){
	$('.user-account').addClass('hidden');
	$('.user-login-complete').removeClass('hidden');
	$('.user-login-complete').find('.welcome').html("Welcome, " + user.Username)
	$('.hide-tool-box').fadeIn(100,function(){
		$(this).css('display','flex');
		initializeMenu();
	});
}

reloadProduct = function(){
	$.ajax({
		url:'Core/get-product.php',
		method:'get',
		success: function(data) {
			products = jQuery.parseJSON(data);
			renderListProduct();
			initPassproduct();
		}
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
	obj['Id'] = user.Id;
	$.ajax({
		url:'Core/get-product.php',
		method:'get',
		data: obj,
		success: function(data){
			yourproduct = jQuery.parseJSON(data);
			renderResult(yourproduct);
		}
	});
}

function getProductByName(name) {
	var obj = {};
	obj['Name'] = name;
	$.ajax({
		url:'Core/get-product.php',
		method:'get',
		data: obj,
		success: function(data){
			yourproduct = jQuery.parseJSON(data);
			renderResult(yourproduct);
		}
	});
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