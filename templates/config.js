message = {
	"Register" : {
		"1" : "Đăng ký thành công!",
		"2" : "Kết nối bị lỗi! Vui lòng thử lại sau!",
		"3" : "Tài khoản đã tồn tại! Vui lòng chọn tài khoản khác",
		"4"	: "Lỗi không xác định, vui lòng thử lại sau!"
	},
	"Login" : {
		"1" : "Đăng nhập thành công!",
		"2" : "Sai tên đăng nhập hoặc mật khẩu!",
		"3" : "Lỗi không xác định, vui lòng thử lại sau!",
	},
	"Password" : {
		"1" : "Đổi mật khẩu thành công!",
		"2"	: "Mật khẩu cũ không đúng!",
		"3"	: "Lỗi không xác định, vui lòng thử lại sau!"
	},
	"Info" : {
		"1" : "Cập nhật thông tin thành công!",
		"2" : "Lỗi không xác định, vui lòng thử lại sau!"
	},
	"Add_Product" : {
		"1" : "Thêm sản phẩm mới thành công!",
		"2" : "Lỗi không xác định, vui lòng thử lại sau!"
	},
	"Update_Product" : {
		"1" : "Cập nhật thông tin sản phẩm thành công!",
		"2" : "Lỗi không xác định, vui lòng thử lại sau!"
	},
	"Bid" : {
		"1" : "Đấu giá thành công!",
		"2" : "Lỗi không xác định, vui lòng thử lại sau!"
	}
};

ajax = {
	//Product
	"fGetProduct" : {
		url : 'Core/get-product.php',
		method : 'get',
	},
	"UpdateProduct" : {
		url : 'Core/update-product.php',
		method : 'post'
	},
	"InsertProduct" : {
		url : 'Core/add-product.php',
		method : 'post'
	},
	//Account
	"fRegister" : {
		url : 'Core/register.php',
		method : 'post'
	},
	
	"fLogin" : {
		url : 'Core/login.php',
		method : 'post',
	},
	"fLogout" : {
		url : 'Core/logout.php',
		method : ''
	},
	"fBet"	: {
		url : 'Core/bet.php',
		method : 'post'
	},
	"UpdateAccount" : {
		url : 'Core/update-account.php',
		method : 'post'
	},
	"fAuthentication" : {
		url : 'Core/authentication.php',
		method : 'get'
	},
	"fGetAccount" : {
		url : 'Core/getaccount.php',
		method : 'get'
	},
	//Image
	"UploadImage" : {
		url : 'Core/upload_image.php',
		method : 'post'
	}
}