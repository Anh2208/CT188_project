let users = [
  {
    id: 1,
    fullname: "Hoang Anh",
    email: "anhvh1412@gmail.com",
    username: "Anh",
    password: "1",
    phone: "113",
    role: "user",
    sex: "male",
  },
  {
    id: 2,
    fullname: "Hoang Nhan",
    email: "anhvh1412@gmail.com",
    username: "Nhan",
    password: "1",
    phone: "114",
    role: "admin",
    sex: "female",
  },
  {
    id: 3,
    fullname: "Hoang Thong",
    email: "anhvh1412@gmail.com",
    username: "Thong",
    password: "1",
    phone: "115",
    role: "user",
    sex: "female",
  },
  {
    id: 4,
    fullname: "Hoang Duong",
    email: "anhvh1412@gmail.com",
    phone: "116",
    username: "Duong",
    role: "admin",
    sex: "female",
  },
];

// window.localStorage.clear();
console.log(localStorage);
function login() {
  // Kiểm tra xem có thông tin người dùng trong localStorage không
  // alert(localStorage.getItem("user"))

  if (localStorage.getItem("user")) {
    // localStorage.removeItem('user'); // Nếu có, xóa thông tin người dùng đó
    const user = JSON.parse(localStorage.getItem("user"));
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    if(username === user.username && password === user.password){
      window.location.href = "Homepage.html";
    }
  }

  // Lấy giá trị tên người dùng và mật khẩu từ input trên form
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  // Kiểm tra thông tin đăng nhập với mảng users
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  // Nếu thông tin đăng nhập đúng
  if (user) {
    // Lưu thông tin người dùng vào localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Chuyển hướng người dùng đến trang header.html
    window.location.href = "Homepage.html";
  } else {
    // Nếu thông tin đăng nhập sai, hiển thị thông báo lỗi
    const formMessage = document.querySelector(".form-message");
    formMessage.innerHTML = "Tên đăng nhập hoặc mật khẩu không đúng";
    formMessage.classList.add("form-message-error");
  }
}

const form = document.querySelector("#Login");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn form gửi dữ liệu đi
  login(); // Gọi hàm login() để xử lý đăng nhập
});

// const form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // Ngăn chặn form gửi dữ liệu đi

//   var username = document.getElementById('username').value;
//   var password = document.getElementById('password').value;
//   var user = localStorage.getItem(username);
//   var data = JSON.parse(user);
//   if (user == null) {
//     alert("Vui lòng nhập tên người dùng và mật khẩu");
//   }
//   else if (username == data.username && password == data.password) {
//     alert("Đăng nhập thành công");
//     window.location.href = "./User.html";
//   }
// });
