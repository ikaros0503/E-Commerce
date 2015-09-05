<!DOCTYPE html>
<html>
<head>
	<title>AQO - Website đấu giá trực tuyến</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<script src="lib/jquery-1.11.3/jquery-1.11.3.min.js"></script>
	<script src="lib/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="lib/bootstrap-3.3.5-dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="lib/bootstrap-3.3.5-dist/css/bootstrap-theme.min.css">
	<link rel="stylesheet" type="text/css" href="lib/bootstrap-3.3.5-dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/home-style.css">
	<link rel="stylesheet" type="text/css" href="css/count-down.css">
	<link rel="stylesheet" type="text/css" href="css/past-product.css">
	<link rel="stylesheet" type="text/css" href="css/current-product.css">
	<script src="lib/handlebars-v4.0.0/handlebars-v4.0.0.js"></script>
	<script src="lib/jquery.countdown/jquery.downCount.js"></script>
	<script src="script/count-down.js"></script>
	<script src="script/templates.js"></script>
	<script src="script/function.js"></script>
<body>
<div class="template"></div>
<header>
	<nav class="navbar navbar-default">
		<div id="logo" class="col-md-1 nav navbar-nav">
		<a href="index.php"><img src="http://www.knapen-trailers.fr/public/site/contentimages/twitter-icon-knapen-trailers-50x50.jpg"></a>
		</div>
		<ul class="nav navbar-nav col-md-7">
			<li id="home">
				<a href="index.php" id="home">Trang chủ</a>
			</li>
			<li id="about">
				<a href="#" id="about">Giới thiệu</a>
			</li>
			<li id="help">
				<a href="#" id="help">Hướng dẫn</a>
			</li>
			<li id="contact">
				<a href="#" id="contact">Liên lạc</a>
			</li>
		</ul>
		<div class="col-md-4 nav navbar-nav navbar-right">
		<div class="col-sm-4"></div>
		<div class="sign-up col-sm-4" style="padding-right:0px !important;">
		<button type="button" class="btn btn-primary navbar-btn sign-up dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon glyphicon-plus"></i> Đăng ký
		<span class="caret"></span>
		</button>
		<div class="dropdown-menu sign-in" style="padding:17px; width:200%">
            <form action="" method="post" accept-charset="UTF-8">
			   <input id="usrname" class="form-control" style="margin-bottom: 15px;" type="text" name="reg-username" size="30" placeholder="Tên đăng nhập" />
			   <input id="usrpwd" class="form-control" style="margin-bottom: 15px;" type="password" name="reg-pwd" size="30" placeholder="Mật khẩu" />
			   <input id="usrconfirmpwd" class="form-control" style="margin-bottom: 15px;" type="password" name="reg-pwd" size="30" placeholder="Nhập lại mật khẩu" />
			   <input class="btn btn-primary" style="clear: left; width: 100%; height: 32px; font-size: 13px; font-weight: bold" type="submit" name="commit" value="Đăng ký" />
			</form>
        </div>
        </div>
        <div class="sign-in col-md-4" style="padding-left:0 !important">
		<button type="button" class="btn btn-default navbar-btn sign-in dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-user"></i> Đăng nhập
		<span class="caret"></span>
		</button>
		<div class="dropdown-menu sign-up" style="padding:17px; width: 200%;">
            <form action="" method="post" accept-charset="UTF-8">
			   <input id="usrname" class="form-control" style="margin-bottom: 15px;" type="text" name="reg-username" size="30" placeholder="Tên đăng nhập" />
			   <input id="usrpwd" class="form-control" style="margin-bottom: 15px;" type="password" name="reg-pwd" size="30" placeholder="Mật khẩu" />
			   <input class="btn btn-primary" style="clear: left; width: 100%; height: 32px; font-size: 13px; font-weight: bold" type="submit" name="commit" value="Đăng nhập" />
			</form>
        </div>
		</div>
		</div>
	</nav>
</header>
<div id="main-content" class="container" style="margin-top:-10px"> 
	<div id="banner" class="carousel slide" data-ride="carousel">
	    <ol class="carousel-indicators">
		    <li data-target="#banner" data-slide-to="0" class="active"></li>
		    <li data-target="#banner" data-slide-to="1"></li>
		    <li data-target="#banner" data-slide-to="2"></li>
	    </ol>
	    <div class="carousel-inner" role="listbox">
		    <div class="item active">
		    	<img src="img/banner/banner4.jpg" alt="Chania" >
		    </div>
		    <div class="item">
		        <img src="img/banner/banner5.jpg" alt="Chania" >
		    </div>
		    <div class="item">
		        <img src="img/banner/banner6.jpg" alt="Flower">
		    </div>
	    </div>
	    </a>
	    <a class="right carousel-control" href="#banner" role="button" data-slide="next">
	    </a>
    </div>
    <div class="product container" style="margin-top: 15px;">
    	<aside id="current-product" class="col-md-7" style="margin-left:-15px !important">
    		<div class="content">
    			<aside class="product-image col-md-6" >
    				<img src="img/products/samsung-galaxy-a8-1-400x533.png">
    			</aside>
	    		<aside class="details col-md-6">
	    			<div class="product-sort-details">
	    				<h2>Samsung Galaxy A8</h2>
	    				<ul>
	    					<li><h5>Màn hình FullHD</h5></li>
	    					<li><h5>RAM 2 GB</h5></li>
	    					<li><h5>Bộ nhớ trong 32 GB</h5></li>
	    				</ul>
	    			</div>
	    			<br>
	    			<span class="start-price" style="clear:both">
	    				<h4><u>Giá khởi điểm</u></h4>
	    				<h2 class="start-price">15.000.000 đ</h2>
	    			</span>
	    			<span class="current-price" style="display:none"></span>
	    			<span class="time-ellapse">
	    				<h4>Thời gian còn</h4>
	    				<ul class="countdown">
							<li> <span class="days">00</span>
							<p class="days_ref">Ngày</p>
							</li>
							<li class="seperator">:</li>
							<li> <span class="hours">00</span>
							<p class="hours_ref">Giờ</p>
							</li>
							<li class="seperator">:</li>
							<li> <span class="minutes">00</span>
							<p class="minutes_ref">Phút</p>
							</li>
							<li class="seperator">:</li>
							<li> <span class="seconds">00</span>
							<p class="seconds_ref">Giây</p>
							</li>
						</ul>
	    			</span>
	    			<button class="btn btn-danger total-bet">Số lượt đấu giá <span class="badge total-bet">40</span></button>
	    			<button class="btn btn-success bet">Tham gia đấu giá</button>
	    		</aside>
    		</div>
    	</aside>
    	<aside id="past-product" class="col-md-5">
    	<ul class="list-product" style="margin-top:5px">
    		<li class="row">
    			<div class="product-details">
    				<aside class="product-img col-md-6">
    					<img src="img/products/samsung-galaxy-a8-1-400x533.png">
    				</aside>
    				<aside class="details col-md-6">
    					<div class="product-sort-details">
		    				<h4><center>Samsung Galaxy A8</center></h4>
		    				<ul>
			    				<li><h5>Giá: <b>14.000.000đ</b></h5></li>
			    				<li><h5>Thời gian:<br><b>18:05 02/09/2015</b></h5></li>
		    				</ul>
		    			</div>
    					<button class="btn btn-primary total-bet">Số lượt đấu giá <span class="badge total-bet">20<i class="glyphicon glyphicon-user"></i></span></button>
    					<button class="btn btn-danger total-bet"><i class="glyphicon glyphicon-plus"></i> Xem chi tiết</span></button>
    				</aside>
    			</div>
    		</li>
    		<hr style="margin-right:20px">
    		<li class="row">
    			<div class="product-details">
    				<aside class="product-img col-md-6">
    					<img src="img/products/samsung-galaxy-grand-prime-g530-1-400x533.png">
    				</aside>
    				<aside class="details col-md-6">
    					<div class="product-sort-details">
		    				<h4><center>Samsung Galaxy Prime</center></h4>
		    				<ul>
			    				<li><h5>Giá: <b>18.000.000đ</b></h5></li>
			    				<li><h5>Thời gian:<br><b>18:05 02/09/2015</b></h5></li>
		    				</ul>
		    			</div>
    					<button class="btn btn-primary total-bet">Số lượt đấu giá <span class="badge total-bet">20<i class="glyphicon glyphicon-user"></i></span></button>
    					<button class="btn btn-danger total-bet"><i class="glyphicon glyphicon-plus"></i> Xem chi tiết</span></button>
    				</aside>
    			</div>
    		</li>
    	</aside>
    </div>
</div>
<div></div>
<footer class="navbar navbar-inverse">

</footer>
</body>
</html>