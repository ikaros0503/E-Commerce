<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>ADO - Website đấu giá trực tuyến</title>
	<script type="text/javascript" src="libs/jquery-1.11.3/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="libs/jquery.countdown/jquery.downCount.js"></script>
	<link rel="stylesheet" type="text/css" href="styles/home.css">
	<link rel="stylesheet" type="text/css" href="styles/navbar.css">
	<link rel="stylesheet" type="text/css" href="styles/button.css">
	<link rel="stylesheet" type="text/css" href="styles/component.css">
	<link rel="stylesheet" type="text/css" href="styles/product.css">
	<link rel="stylesheet" type="text/css" href="styles/style.css">
	<link rel="stylesheet" type="text/css" href="styles/carousel.css">
	<link rel="stylesheet" type="text/css" href="styles/scroll-bar.css">
	<link rel="stylesheet" type="text/css" href="styles/modal.css">
	<script type="text/javascript" src="script/animation.js"></script>
	<script type="text/javascript" src="libs/jCarousel/jcarousel.min.js"></script>
	<script type="text/javascript" src="script/core.js"></script>
	<script type="text/javascript" src="script/passproduct.js"></script>
	<script type="text/javascript" src="script/modal.js"></script>
</head>
<body>
<div class="navbar navbar-default header-bar">
	<div class="logo-img" style="width:20%; float:left">
		<img src="" style="width:40px; height:40px">
	</div>
	<div class="search-box" style="width:50%; float:left">
		<input type="text" class="text text-search form-control" placeholder="Enter text to search">
	</div>
	<div class="user-account">
		<button style="button" class="btn btn-primary btn-register"> Register</button>
		<button style="button" class="btn btn-default btn-login"> Login</button>
	</div>
</div>
<div class="content">
	<div class="owner-product">
		
	</div>
	<div class="container">
		<div class="jcarousel">
			<ul>
				<li>
				<img src="img/banner/banner1.jpg">
				</li>
				<li>
				<img src="img/banner/banner2.jpg">
				</li>
				<li>
				<img src="img/banner/banner3.jpg">
				</li>
			</ul>
			<a href="#" class="next next-stage"><span>›</span></a>
			<a href="#" class="prev prev-stage"><span>‹</span></a>
		</div>
		<p class="jcarousel-pagination"></p>
	</div>
	<div class="pass-product-bar">
		<div class="scroll-bar scroll-up">
		</div>
		<div class="product pass-product" data-id="">
			<div class="product-image">
				<img class="product-img" src="img/product/lenovo-vibe-shot-1-400x460.png">
			</div>
			<div class="product-name text-center">
				<span>Lenovo Vibe Shot</span>
			</div>
		</div>
		<div class="product pass-product" data-id="">
			Chưa có sản phẩm
		</div>
		<div class="product pass-product" data-id="">
			Chưa có sản phẩm
		</div>
		<div class="scroll-bar scroll-down">

		</div>
	</div>
	
</div>
<!-- <div class="navbar nav-default footer-bar">
	
</div> -->
<div class="modal-region">
	<div class="modal register-modal">
		<div class="modal-header text-center">
			<h1>Register</h1>
		</div>
		<div class="modal-content">
			<div class="error-message text-center" style="display:none"></div>
			<label><b>Username</b></label>
			<input type="text" class="text form-control user-name" name="Username" placeholder="Type your username" data-require='required'>
			<label><b>Password</b></label>
			<input type="password" class="text form-control password" name="Password" placeholder="Type your password" data-require='required'>
			<label><b>Confirm password</b></label>
			<input type="password" class="text form-control confirm-password" name="Confirm" placeholder="Retype your password" data-require='required'>
			<label><b>Email</b></label>
			<input type="email" class="text form-control " name="Email" placeholder="example@email.com" data-require='required'>
			<div><label><b>Gender</b></label></div>
			<span><select class="sex form-control" name="Sex">
				<option value="-1">-- Your gender --</option>
				<option value="1">Male</option>
				<option value="2">Female</option>
			</select>
			</span>
			<p class="text-center">By registering, you agree to the privacy policy and terms of service.</p>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-default btn-cancel"> Cancel</button>
			<button type="button" class="btn btn-success btn-register"> Register</button>
		</div>
		</div>
</div>
<div class="fade-ground"></div>
</body>
</html>