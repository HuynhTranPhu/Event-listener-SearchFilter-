var users = [
	{ 
  	name: 'Thinh', 
    phone: '070123123'
  },
  {
  	name: 'Hung',
    phone: '080456456'
  },
  {
  	name: 'Hoang',
    phone: '090123123'
  }
];
var userList = document.getElementById('userList');
var searchInput = document.getElementById('searchInput');

function render(users) {
	var content = users.map(function(user) {
  	return '<li>' + user.name + ' - ' + user.phone + '</li>';
  });
  userList.innerHTML = content.join('');
}

render(users);

searchInput.addEventListener('keyup', function(event) {
        var value = searchInput.value;
        //var newArr = [];
        //users.filter(arr => {
          //if (!arr.name.indexOf(value) || !arr.phone.indexOf(value))
            //return newArr.push(arr);
        //});
        //var content = newArr.map(function(user) {
          //return "<li>" + user.name + " - " + user.phone + "</li>";
       // });
        //userList.innerHTML = content.join("");
      function filterItems(arr, query) 
      {
        return arr.filter(function(el) 
        {
          return el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || el.           phone.indexOf(query) !== -1
        });
      }

      var result = filterItems(users, value)
      render(result)
});
// sự kiện 'change' chỉ xảy ra khi input bị mất focus
  // sử dụng sự kiện keyup để tìm kiếm người dùng có số điện thoại khớp với nội dung tìm kiếm.
  // Gợi ý: 
  // - biến value dưới đây là giá trị của input tại thời điểm gõ phím
  // - sử dụng array.filter và string.indexOf để lọc users array, trả về những phần tử có số điện thoại chứa string lưu trong biến `value`
  // Sử dụng Chrome Developer Tools để xem giá trị hiển thị ra sau mỗi lần gõ
	//var value = searchInput.value;
  //console.log(value);