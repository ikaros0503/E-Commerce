show = function(f,callback) {
	$('.modal-region').addClass('in');
	$(f).addClass('in');
	$(f).css({top: 0, opacity: 0}).
    	animate({top: 50, opacity: 1}, 400, callback != undefined ? callback() : null);
    initRegisterModal();
}

hide = function(f, callback) {
	$(f).css({top: 50, opacity: 1}).
    	animate({top: 0, opacity: 0}, 400, function(){
    		$(f).removeClass('in');
			$('.modal-region').removeClass('in');
    		$('.fade-ground').removeClass('in');
    		resetAll(f);
    	});
}

initRegisterModal = function() {
	var modal = $('.modal.register-modal');
	modal.find('button.btn-register').unbind().click(function() {
		var error = validateFormField(modal);
		if (!error) {
			var obj = createInserAccountObj(modal);
			$.ajax({
				url:'Core/connectDB.php',
				type:'post',
				data: obj,
				success: function(data) {
					console.log(data);
				}
			});
		};
	});
}

function validateFormField(f) {
	var inputs = f.find('input');
	var error = false;
	resetAll(f);
	$.each(inputs, function(_,input){
		$(input).removeClass('error');
		if ($(input).val() == '' && $(input).attr('data-require') == 'required') {
			$(input).addClass('error');
			$('.register-modal .modal-content').find('.error-message')
				.html($(input).attr('name') + ' is required!').slideDown(100);
			error = true;
			return false;
		}
	});

	if (!error) {
		var pass = f.find('input[name="Password"]').val();
		var confirmpass = f.find('input[name="Confirm"]').val();
		if (pass != confirmpass) {
			f.find('input[name="Confirm"]').addClass('error');
			$('.register-modal .modal-content').find('.error-message')
				.html('Confirm password missmatch!').slideDown(100);
		}
	}

	return error;
}

function resetAll(f) {
	f.find('input').removeClass('error');
	$('.register-modal .modal-content').find('.error-message').css('display','none');
}

function createInserAccountObj(f){
	var obj = {};
	var inputs = f.find('input');
	$.each(inputs, function(_,input){
		var val = $(input).val();
		if ($(input.attr('name') == 'Password' || $(input.attr('name') == 'Confirm'))
		obj[$(input).attr('name')] = val;
	});
	if (f.find('select[name="Sex"]').val() != -1)
		obj['Sex'] = f.find('select[name="Sex"]').val();
	console.log(obj);
	return obj;
}