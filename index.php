<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>ADO - Website đấu giá trực tuyến</title>
	<script type="text/javascript" src="libs/jquery-1.11.3/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="libs/jquery.countdown-2.1.0/jquery.countdown.min.js"></script>
	<link rel="stylesheet" type="text/css" href="styles/home.css">
	<link rel="stylesheet" type="text/css" href="styles/navbar.css">
	<link rel="stylesheet" type="text/css" href="styles/button.css">
	<link rel="stylesheet" type="text/css" href="styles/component.css">
	<link rel="stylesheet" type="text/css" href="styles/product.css">
	<link rel="stylesheet" type="text/css" href="styles/style.css">
	<link rel="stylesheet" type="text/css" href="styles/carousel.css">
	<link rel="stylesheet" type="text/css" href="styles/scroll-bar.css">
	<link rel="stylesheet" type="text/css" href="styles/modal.css">
	<link rel="stylesheet" type="text/css" href="styles/colors.css">
	<link rel="stylesheet" type="text/css" href="styles/menu.css">
	<!--<script src="libs/amazing-slider/sliderengine/jquery.js"></script>-->

	<link rel="stylesheet" href="libs/owl-carousel/owl.carousel.css">
 
	<link rel="stylesheet" href="libs/owl-carousel/owl.theme.css">
 
	<script src="libs/owl-carousel/owl.carousel.js"></script>

	<script type="text/javascript" src="script/animation.js"></script>
	<script type="text/javascript" src="script/core.js"></script>
	<script type="text/javascript" src="script/product.js"></script>
	<script type="text/javascript" src="script/modal.js"></script>
	<script type="text/javascript" src="script/menu.js"></script>
	<link rel="stylesheet" type="text/css" href="styles/add-product.css">
	<link rel="stylesheet" type="text/css" href="styles/showproduct.css">
	<script type="text/javascript" src="script/add-product.js"></script>
	<script type="text/javascript" src="templates/templates.js"></script>
</head>
<body>
<div class="navbar navbar-default header-bar">
	<div class="logo-img" style="width:20%; float:left">
		<a href="index.php"><img src="img/logo/logo.jpg" style="width:40px; height:40px"></a>
	</div>
	<div class="search-box" style="width:50%; float:left">
		<input type="text" class="text text-search form-control" placeholder="Enter text to search">
	</div>
	<div class="user-account">
		<button style="button" class="btn btn-primary btn-register"> Register</button>
		<button style="button" class="btn btn-default btn-login"> Login</button>
	</div>
	<div class="user-login-complete user-account hidden">
		<span class="welcome"></span>
		<div class="log-out"><a href="Core/logout.php" class="inset-text-effect">Logout</a></div>
	</div>
</div>
<div class="content">
	<div class="owner-product">
		<div class="hide-tool-box hide">&nbsp;<a href='#'>&lt;&lt;&lt;</a></div>
		<div class="tool-box">
			<ul>
				<li class="active"><a href='#home'><span>Home</span></a></li>
				<li class="active"><a href='#accManager'><span>Account</span></a>
					<ul>
						<li><a href='#changePassword'><span>Change Password</span></a></li>
						<li><a href='#updateInfo'><span>Update Info</span></a></li>
					</ul>
				</li>
				<li class="active"><a href='#productManager'><span>Products</span></a>
					<ul>
						<li><a href='#addProduct'><span>Add Product</span></a></li>
						<li><a href='#showProduct'><span>Show Product</span></a></li>
					</ul>
				</li>
			</ul>
		</div>		
	</div>
	<div class="container">
		
	</div>
	<div class="pass-product-bar">
		
	</div>
	
</div>
<!-- <div class="navbar nav-default footer-bar">
	
</div> -->
<div class="modal-region">
	
</div>
<div class="fade-ground"></div>
<div class="navbar navbar-default page-footer"></div>
</body>
</html>