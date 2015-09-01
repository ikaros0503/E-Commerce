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
	<script src="lib/Jssor.Slider.FullPack/js/jssor.slider.mini.js"></script>
	<script type="text/javascript">
		jQuery(document).ready(function ($) {
        var options = {
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $ChanceToShow: 2
            }
        };
        var jssor_slider1 = new $JssorSlider$('banner', options);
    });
	</script>
<body>
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
<div id="main-content" class="container"> 
	<div id="banner" style="position: relative; top: 0px; width:1170px; left: 0px; height: 300px;">
		<div u="slides" style="cursor: move; position: absolute; overflow: hidden; left: 0px; top: 0px; width:1170px; height: 300px;">
	        <div><img u="image" src="img/banner/banner1.jpg" /></div>
	        <div><img u="image" src="img/banner/banner2.jpg" /></div>
	        <div><img u="image" src="img/banner/banner3.jpg" /></div>
    	</div>	
    	<style>
            .jssorb12 {
                position: absolute;
            }
            .jssorb12 div, .jssorb12 div:hover, .jssorb12 .av {
                position: absolute;
                width: 16px;
                height: 16px;
                background: url(img/bullet/b21.png) no-repeat;
                overflow: hidden;
                cursor: pointer;
            }
            .jssorb12 div { background-position: -7px -7px; }
            .jssorb12 div:hover, .jssorb12 .av:hover { background-position: -37px -7px; }
            .jssorb12 .av { background-position: -67px -7px; }
            .jssorb12 .dn, .jssorb12 .dn:hover { background-position: -97px -7px; }
        </style>
        <div align="center" u="navigator" class="jssorb12" style="bottom: 16px; right: 6px;">
            <div u="prototype"></div>
        </div>
	</div>
</div>
</body>
</html>