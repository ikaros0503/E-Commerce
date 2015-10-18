vRqs = function(obj,callback) {
	var _url = ajax[obj.Name].url;
	var _method = ajax[obj.Name].method;
	var _data = obj.Data;
	console.log(obj);
	$.ajax({
		url : _url,
		method : _method,
		data : _data,
		contentType: obj.ContentType != undefined ? obj.ContentType : 'application/x-www-form-urlencoded; charset=UTF-8',
		processData: obj.ProcessData != undefined ? obj.ProcessData : true,
		success: function(data) {
			callback(data);
		}
	});
}