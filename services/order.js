//List of province and district
  //location
const provinceSelect = document.getElementById('province__order');
const districtSelect = document.getElementById('district__order');
const provinces = [
  {
    province: "Hà Nội",
    district: ["Ba Đình", "Hoàn Kiếm", "Tây Hồ", "Long Biên", "Cầu Giấy", "Đống Đa", "Hai Bà Trưng", "Hoàng Mai", "Thanh Xuân", "Sóc Sơn", "Đông Anh", "Gia Lâm", "Nam Từ Liêm", "Thanh Trì", "Bắc Từ Liêm", "Mê Linh", "Hà Đông", "Sơn Tây", "Ba Vì", "Phúc Thọ", "Đan Phượng", "Hoài Đức", "Quốc Oai", "Thạch Thất", "Chương Mỹ", "Thanh Oai", "Thường Tín", "Phú Xuyên", "Ứng Hòa", "Mỹ Đức"]
  },
  {
    province: "Hồ Chí Minh",
    district: ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 9", "Quận 10", "Quận 11", "Quận 12", "Bình Tân", "Bình Thạnh", "Gò Vấp", "Phú Nhuận", "Tân Bình", "Tân Phú", "Thủ Đức", "Bình Chánh", "Cần Giờ", "Củ Chi", "Hóc Môn", "Nhà Bè"]
  },
  {
    province: "Đà Nẵng",
    district: ["Hải Châu", "Thanh Khê", "Sơn Trà", "Ngũ Hành Sơn", "Liên Chiểu", "Cẩm Lệ", "Hòa Vang"]
  },
  {
    province: "Hải Phòng",
    district: ["Hồng Bàng", "Ngô Quyền", "Lê Chân", "Hải An", "Kiến An", "Đồ Sơn", "Dương Kinh", "Thuỷ Nguyên", "An Dương", "An Lão", "Kiến Thuỵ", "Tiên Lãng", "Vĩnh Bảo", "Cát Hải", "Bạch Long Vĩ"]
  },
  {
    province: "Cần Thơ",
    district: ["Ninh Kiều", "Ô Môn", "Bình Thuỷ", "Cái Răng", "Thốt Nốt", "Vĩnh Thạnh", "Cờ Đỏ", "Phong Điền", "Thới Lai"]
  },
  {
    province: "Đắk Lắk",
    district: ["Buôn Ma Thuột", "Buôn Hồ", "Ea H'leo", "Ea Súp", "Buôn Đôn", "Cư M'gar", "Krông Ana", "Krông Bông", "Krông Búk", "Krông Năng", "Krông Pắc", "Lắk", "M'Đrắk"]
  },
  {
    province: "Khánh Hòa",
    district: ["Nha Trang", "Cam Ranh", "Cam Lâm", "Vạn Ninh", "Ninh Hòa", "Khánh Vĩnh", "Diên Khánh", "Khánh Sơn", "Trường Sa"]
  },
  {
    province: "Lào Cai",
    district: ["Thành phố Lào Cai","Bát Xát","Bảo Thắng","Bảo Yên","Sa Pa","Văn Bàn","Bắc Hà","Mường Khương","Si Ma Cai"]
  },
  {
    province: "Hà Giang",
    district: ["Thành phố Hà Giang", "Đồng Văn", "Mèo Vạc", "Yên Minh", "Quản Bạ", "Vị Xuyên", "Bắc Mê", "Hoàng Su Phì", "Xín Mần", "Bắc Quang"]
  },
  {
    province: "Cao Bằng",
    district: ["Thành phố Cao Bằng", "Bảo Lâm", "Bảo Lạc", "Thạch An", "Nguyên Bình", "Hà Quảng", "Hòa An", "Quảng Uyên", "Trùng Khánh", "Thông Nông", "Hạ Lang"]
  },
  {
    province: "Bắc Kạn",
    district: ["Thành phố Bắc Kạn", "Pác Nặm", "Ba Bể", "Ngân Sơn", "Bạch Thông", "Chợ Đồn", "Chợ Mới", "Na Rì"]
  },
  {
    province: "Tuyên Quang",
    district: ["Thành phố Tuyên Quang", "Lâm Bình", "Nà Hang", "Chiêm Hóa", "Hàm Yên", "Yên Sơn", "Sơn Dương"]
  },
  {
    province: "Yên Bái",
    district: ["Thành phố Yên Bái", "Nghĩa Lộ", "Lục Yên", "Văn Yên", "Mù Cang Chải", "Trấn Yên", "Trạm Tấu", "Văn Chấn", "Yên Bình"]
  },
  {
    province: "Sơn La",
    district: ["Thành phố Sơn La", "Quỳnh Nhai", "Thuận Châu", "Mường La", "Bắc Yên", "Phù Yên", "Mai Sơn", "Yên Châu", "Sông Mã", "Mộc Châu", "Sốp Cộp", "Vân Hồ"]
  },
  {
    province: "Hòa Bình",
    district: ["Thành phố Hòa Bình", "Đà Bắc", "Kỳ Sơn", "Lương Sơn", "Kim Bôi", "Cao Phong", "Tân Lạc", "Mai Châu", "Lạc Sơn", "Yên Thủy", "Lạc Thủy"]
  },
  {
    province: "Thái Nguyên",
    district: ["Thành phố Thái Nguyên", "Sông Công", "Định Hóa", "Võ Nhai", "Đại Từ", "Phổ Yên", "Phú Bình", "Phú Lương"]
  },
  {
    province: "Long An",
    district: ["Thành phố Tân An", "Huyện Bến Lức", "Huyện Cần Đước", "Huyện Cần Giuộc", "Huyện Châu Thành", "Huyện Đức Hòa", "Huyện Đức Huệ", "Huyện Mộc Hóa", "Huyện Tân Hưng", "Huyện Tân Thạnh", "Huyện Tân Trụ", "Huyện Thạnh Hóa", "Huyện Thủ Thừa", "Huyện Vĩnh Hưng"]
  },
  {
    province: "Bình Dương",
    district: ["Thành phố Thủ Dầu Một", "Huyện Bàu Bàng", "Huyện Bắc Tân Uyên", "Huyện Bến Cát", "Huyện Dầu Tiếng", "Huyện Dĩ An", "Huyện Phú Giáo", "Huyện Tân Uyên", "Huyện Thuận An"]
  },
  {
    province: "Đồng Nai",
    district: ["Thành phố Biên Hòa", "Thành phố Long Khánh", "Huyện Cẩm Mỹ", "Huyện Định Quán", "Huyện Long Thành", "Huyện Nhơn Trạch", "Huyện Tân Phú", "Huyện Thống Nhất", "Huyện Trảng Bom", "Huyện Vĩnh Cửu", "Huyện Xuân Lộc"]
  },
  {
    province: "Bà Rịa - Vũng Tàu",
    district: ["Thành phố Vũng Tàu", "Thành phố Bà Rịa", "Huyện Châu Đức", "Huyện Côn Đảo", "Huyện Đất Đỏ", "Huyện Long Điền", "Huyện Tân Thành", "Huyện Xuyên Mộc"]
  },
  {
    province: "Tây Ninh",
    district: ["Thành phố Tây Ninh", "Huyện Bến Cầu", "Huyện Châu Thành", "Huyện Dương Minh Châu", "Huyện Gò Dầu", "Huyện Hòa Thành", "Huyện Tân Biên", "Huyện Tân Châu", "Huyện Trảng Bàng"]
  },
  {
    province: "Bình Phước",
    district: ["Thị xã Đồng Xoài", "Thị xã Bình Long", "Huyện Bù Đốp", "Huyện Bù Đăng", "Huyện Bù Gia Mập", "Huyện Chơn Thành", "Huyện Đồng Phú", "Huyện Hớn Quản", "Huyện Lộc Ninh", "Huyện Phú Riềng"]
  }
  ];
provinces.forEach(function(province) {
  var option = document.createElement('option');
  option.value = province.province;
  option.text = province.province;
  provinceSelect.appendChild(option);
});

provinceSelect.addEventListener('change', function() {
  var selectedProvince = provinceSelect.value;
  var selectedProvinceObj = provinces.find(function(province) {
    return province.province === selectedProvince;
  });

  districtSelect.innerHTML = '';

  selectedProvinceObj.district.forEach(function(district) {
    var option = document.createElement('option');
    option.value = district;
    option.text = district;
    districtSelect.appendChild(option);
  });
});

  // provinces.forEach(function(province) {
  //   var option = document.createElement('option');
  //   option.value = province.province;
  //   option.text = province.province;
  //   provinceSelect.appendChild(option);
  // });

  // provinceSelect.addEventListener('change', function() {
  //   var selectedProvince = provinceSelect.value;
  //   var selectedProvinceObj = provinces.find(function(province) {
  //     return province.province === selectedProvince;
  //   });

  //   districtSelect.innerHTML = '';

  //   selectedProvinceObj.district.forEach(function(district) {
  //     var option = document.createElement('option');
  //     option.value = district;
  //     option.text = district;
  //     districtSelect.appendChild(option);
  //   });
  // });