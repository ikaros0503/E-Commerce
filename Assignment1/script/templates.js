

$(document).ready(function () {
	loadTemplate();
});

loadTemplate = function() {
	$('.template').load('templates/product.html', function () {
		var template = $('.template');
		$.each(template.children(), function(k,v) {
			var source = $('#'+v.id).html();
			var template = Handlebars.compile(source);
			var context = {
				src: 'img/products/samsung-galaxy-a8-1-400x533.png',
				name:'Samsung Galaxy A8',
				price:'15.000.000đ',
				date:'26/09/2015',
			}
			var html = template(context);
		});
	})
};

includeTemplate = function() {
	var context = {
		src: 'img/products/samsung-galaxy-a8-1-400x533.png',
		name:'Samsung Galaxy A8',
		price:'15.000.000đ',
		date:'26/09/2015',
	}
}
