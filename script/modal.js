show = function(f,callback) {
	if (!$('.fade-ground').hasClass('in')) $('.fade-ground').addClass('in');
	$(f).parent().addClass('in');
	$(f).addClass('in');
	$(f).css({top: 0, opacity: 0}).
    	animate({top: 50, opacity: 1}, 400, callback != undefined ? callback() : null);
}

hide = function(f, callback) {
	$(f).css({top: 50, opacity: 1}).
    	animate({top: 0, opacity: 0}, 400, function(){
    		$(f).removeClass('in');
			$(f).parent().removeClass('in');
    		$('.fade-ground').removeClass('in');
    		resetAll(f);
    		$(f).find('input').val('');
    		reloadProduct();
    	});
}

initRegisterModal = function() {
	$('.modal-region').load('modal/register.html', function(){
		var modal = $(this);
		var register = modal.find('.register-modal');
		show(register, function(){
			bindBasicEventOnModal(register);
			modal.find('button.btn-register').unbind().click(function() {
				var error = validateFormField(modal);
				if (!error) {
					var obj = createInserAccountObj(modal);
					modal.load('modal/waiting.html', function(){
						modal.find('.waiting-modal').addClass('in');
						$.ajax({
							url:'Core/register.php',
							type:'post',
							data: obj,
							success: function(data) {
								var _modal = modal.find('.waiting-modal');
								_modal.removeClass('in');
								if (data == 1) {
									showSuccessful("Register Successfully!");
								} else if (data == 3) {
									showError("Account is already existed!");
								} else if (data == 4) {
									showError("Query error!");
								}
							}
						});
					});
				}
			});
		});
		
	});
}

function bindBasicEventOnModal(modal) {
	modal.find('input[name="Username"]').focus();
	modal.find('.btn-cancel').unbind().click(function(){
		hide(modal);
	});
	 $('.modal-region').on('click', function (e) {
	 	$('.modal').each(function () {
	 		if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.modal').has(e.target).length === 0) {
	 			hide(modal);
	 		}
	 	});
	 });
}	

initLoginModal = function() {
	$.ajax({
		url:'Core/authentication.php',
		type:'get',
		success: function(data){
			if (data == "NO_SESSION") {
				$('.modal-region').load('modal/login.html', function(){
					var modal = $(this);
					var login = modal.find('.login-modal');
					show(login, function(){
						bindBasicEventOnModal(login);
						modal.find('button.btn-login').unbind().click(function() {
							var error = validateFormField(modal);
							if (!error) {
								var obj = createLoginObj(modal);
								modal.load('modal/waiting.html', function(){
									modal.find('.waiting-modal').addClass('in');
									$.ajax({
										url:'Core/login.php',
										type:'post',
										data: obj,
										success: function(data) {
											var _modal = modal.find('.waiting-modal');
											_modal.removeClass('in');
											var result = data.split('|')[0];
											if (result == 1) {
												showSuccessful("Login Successfully!");
												loginComplete(data.split('|')[1],data.split('|')[2]);
											} else {
												showError("Login failed!");
											}
										}
									});
								});
							}
						});
					})
				});
			} else {
				$('.fade-ground').removeClass('in');
				var id = data.split('|')[0];
				var username = data.split('|')[1];
				loginComplete(id,username);
			}
		}
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
			$('.modal .modal-content').find('.error-message')
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
		// if ($(input.attr('name') == 'Password' || $(input.attr('name') == 'Confirm'))
		
		obj[$(input).attr('name')] = val;
	});
	if (f.find('select[name="Sex"]').val() != -1)
		obj['Sex'] = f.find('select[name="Sex"]').val();
	return obj;
}

function createLoginObj(f){
	var obj = {};
	var username = f.find('input[name="Username"]').val();
	var password = f.find('input[name="Password"]').val();
	obj["Username"] = username;
	obj["Password"] = password;
	return obj;
}

showSuccessful = function(message) {
	$('.modal-region').load('modal/successfully.html', function(){
		show($('.message-modal'), function(){
			bindBasicEventOnModal($('.message-modal'));
			$('.message-modal .modal-content').find('h2').html(message);
		});
	})
}

showError = function(message) {
	$('.modal-region').load('modal/error.html', function(){
		show($('.error-modal'), function(){
			bindBasicEventOnModal($('.error-modal'));
			$('.error-modal .modal-content').find('h2').html(message);
		});
	});
}

showConfirm = function(message, callback) {
	$('.modal-region').load('modal/confirm.html', function(){
		show($('.confirm-modal'), function(){
			bindBasicEventOnModal($('.confirm-modal'));
			$('.confirm-modal .modal-content').find('h2').html(message);
			callback != undefined ? callback() : "";
		});
	});	
}

showBet = function(preshowcallback, callback) {
	$('.modal-region').load('modal/bet.html', function(){
		preshowcallback();
		show($('.bet-modal'), function(){
			bindBasicEventOnModal($('.bet-modal'));
			callback();
		});
	});
}

showChangePass = function(callback) {
	$('.modal-region').load('modal/changepassword.html',function(){
		show($('.change-password-modal'),function(){
			bindBasicEventOnModal($('.change-password-modal'));
			callback();
		});
	})
}

showUpdateInfo = function(callback) {
	$('.modal-region').load('modal/updateinfo.html',function(){
		show($('.update-info-modal'),function(){
			bindBasicEventOnModal($('.update-info-modal'));
			callback();
		});
	})
}
