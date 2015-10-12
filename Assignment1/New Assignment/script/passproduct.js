initPassproduct = function(){
	$('.product.pass-product').unbind().click(function(){
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
		
		$('.content .container').fadeOut(500,function(){
			if (isSelect) {
				$('.content .container').load('templates/banner.html',function(){
					initListener();
					$(this).css({
						'width' : '72%',
					}).fadeIn(500);
				});
			} else {
				$('.content .container').load('templates/product-tpl.html',function(){
					$(this).css({
						'width' : '60%',
					}).fadeIn(500);
				});
			}
		});
	});
}

function renderProduct() {

}