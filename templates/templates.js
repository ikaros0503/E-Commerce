miniProductTpl =   '<div class="product pass-product" data-id="{ProductId}">' +
                '<div class="product-image">' +
                    '<img class="product-img" src="img/product/{ProductId}/{ProductImg}">' +
                '</div>' +
                '<div class="product-name text-center">' +
                    '<span>{Name}</span>' +
                '</div>' +
            '</div>';

noProductTpl =   '<div class="product pass-product" data-id="-1">' +
                '<div class="no-product text-center">'+
                '<h3>Chưa có sản phẩm</h3></div>' +
            	'</div>';

resultProductTpl= '<li data-id="{ProductId}">'+
                '<div class="product-name text-center">{Name}</div>'+
                '<div class="image-preview">'+
                '<img src="img/product/{ProductId}/{ProductImg}">'+
                '</div>' +
                '<div class="product-name text-center date-bid hidden">Ngày: {BidDate}</div>' +
                '<div class="product-name text-center date-bid hidden">Giá: {Price}</div>'+ 
                '<div class="tool text-center">'+
                    '<button type="button" class="btn btn-success btn-edit">'+
                        'Sửa'+
                    '</button>&nbsp;&nbsp'+
                    '<button type="button" class="btn btn-danger btn-remove text-center">'+
                        'Xóa'+
                    '</button>'+
                '</div>'+
                '</li>';
