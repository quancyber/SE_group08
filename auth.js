const login = document.getElementsByClassName("account-item")[0];
console.log("lofin: ", login);
const isLogin = JSON.parse(localStorage.getItem("login"));
console.log("isLogin: ", isLogin);
if (isLogin) {
  const user = JSON.parse(localStorage.getItem("acc"));
  login.innerHTML = `<div class="display: flex"><b style="color: white;">${user.email}</b>|<a style="color: white;" href="/accountUser.html">Tài khoản</a>|<button style="background-color: #c29832; color: white" onclick="logout()">Đăng xuất</button><div>`;
}

function logout() {
  localStorage.removeItem("login");
  // localStorage.removeItem("acc");
  window.location.href = "/home.html";
}

function changePassword() {
  const current = document.getElementById("password_current");
  const newPassword = document.getElementById("password_1");
  const confirm = document.getElementById("password_2");
  console.log("current: ", current);
  console.log("new: ", newPassword);
  console.log("confitm: ", confirm);
  let check = true;
  const acc = JSON.parse(localStorage.getItem("acc"));
  console.log("acc: ", acc);
  if (acc.password != current.value) {
    setErrorFor(current, "Mật khẩu hiện tại không đúng");
    check = false;
  } else {
    if (!isValidPass(newPassword.value)) {
      setErrorFor(newPassword, "6-20 ký tự bao gồm ký tự hoa, thường và số");
      check = false;
    }
    if (newPassword.value !== confirm.value) {
      setErrorFor(confirm, "Mật khẩu nhập lại không khớp");
      check = false;
    }
  }
  if (check) {
    acc.password = newPassword.value;
    localStorage.setItem("acc", JSON.stringify(acc));
    setSuccessFor(current, "Đổi mật khẩu thành công");
    setSuccessFor(newPassword, "");
    setSuccessFor(confirm, "");
  }
}

function setErrorFor(input, msg) {
  const small = input.nextElementSibling;
  console.log(small);
  small.innerText = msg;
}
function setSuccessFor(input, msg) {
  const small = input.nextElementSibling;
  small.style.color = "green";
  small.innerText = msg;
}
function isValidPass(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return regex.test(password);
}
