function errorgeo(err) { //Báo lỗi khi có lỗi
    var errcode = err.code;
    var message = err.message;
    var boxhtml = document.getElementById("toado");
    boxhtml.innerHTML = "Error: " + errcode + "<br>" + "Reason: " + message; //Hiện thông báo lỗi
}

function showcoord(pos) { //Thông bão vĩ độ, kinh độ
    var coord = pos.coords;
    var long = coord.longitude;
    var lat  = coord.latitude;
    var boxhtml = document.getElementById("BoxShow");
    boxhtml.innerHTML = "Vị trí hiện tại của bạn:"+"<br>"+ "Kinh độ: " + long + "<br>" + "Vĩ độ: " + lat;
}
