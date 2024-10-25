function errorgeo(err) { //Báo lỗi khi có lỗi
    var errcode = err.code;
    var message = err.message;
    var boxhtml = document.getElementById("toado");
    boxhtml.innerHTML = "Error: " + errcode + "<br>" + "Reason: " + message; //Hiện thông báo lỗi
}

function showcoord(pos) { //Thông báo vĩ độ, kinh độ và nơi ở
    var coord = pos.coords;
    var long = coord.longitude;
    var lat  = coord.latitude;
    const geoApiUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=vi`
    fetch(geoApiUrl)
    .then(res => res.json())
    .then(data => {
        var boxhtml = document.getElementById("BoxShow");
        boxhtml.innerHTML = "Vị trí hiện tại của bạn:"+"<br>"+data.principalSubdivision+", "+data.locality+", "+data.countryName+"<br>"+"<br>"+ "Kinh độ: " + long + "<br>" + "Vĩ độ: " + lat;
    })
}
