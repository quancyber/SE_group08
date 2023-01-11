const cartHeadericon = document.getElementsByClassName("cart-icon");
const numcart = window.localStorage.getItem("numcart") || 0;

for (let i = 0; i < cartHeadericon.length; i++) {
    cartHeadericon[i].innerHTML = "<strong>" + numcart + "</strong>";
}
// window.localStorage.clear()

// const user = window.localStorage.getItem("login")||"haha";
// console.log(user);
