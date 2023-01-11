function completeCheckout() {
    const form = document.getElementById("form-checkout")
    const email = document.getElementById("billing_email");
    const firstname = document.getElementById("billing_first_name")
    const lastname = document.getElementById("billing_last_name")
    const address = document.getElementById("billing_address")
    const phone = document.getElementById("billing_phone")
    const shipping_state = document.getElementById("shipping_state")
    const order_comments = document.getElementById("order_comments")
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = window.localStorage.getItem("login") || "";
        const checkout = {
            "user": user,
            "email": email.value,
            "name": lastname.value + " " + firstname.value,
            "address": address.value,
            "phone": phone.value,
            "shipping_state": shipping_state.value || "",
            "order_comments": order_comments.value,
            "total": (subTotalPrice + 25),
            "item": strItem

        }
        for (let i = 100; i < 200; i++) {
            const check = window.localStorage.getItem(i) || "";
            if (check == "") {
                window.localStorage.setItem(i, JSON.stringify(checkout));
                console.log(i, checkout);
                break;
            }
        }
        for (let i = 0; i < 100; i++) {
            window.localStorage.removeItem(i);
        }

        window.location.replace("orderUser.html");
    })
}
let str = "";
let strItem = ""
const checkoutCartItem = document.getElementById("checkout-cart-item");
let subTotalPrice = 0;
for (let i = 1; i < 100; i++) {
    const item = window.localStorage.getItem(i.toString()) || "";
    if (item != "") {
        const obj = JSON.parse(item);
        const subtotal = parseInt(obj.price) * parseInt(obj.num);
        subTotalPrice += subtotal;
        strItem += `<a href="` + obj.link + `">` + obj.name + ` x ` + obj.num + ` = ` + subtotal + `,000<span
        class="woocommerce-Price-currencySymbol">VND</span></bdi></span></a><br>`;

        str += `<tr class="cart_item">
        <td class="product-name">
            `+ obj.name + `&nbsp; <strong
                class="product-quantity">×&nbsp;`+ obj.num + `</strong>
        </td>
        <td class="product-total">
            <span
                class="woocommerce-Price-amount amount"><bdi>`+ subtotal + `,000<span
                        class="woocommerce-Price-currencySymbol">VND</span></bdi></span>
        </td>
        </tr>`;
    }
}

checkoutCartItem.innerHTML = str;

document.getElementById("sub-total").innerHTML = subTotalPrice + ",000<span class='woocommerce-Price-currencySymbol'>VND</span>";
document.getElementById("total").innerHTML = (subTotalPrice + 25) + ",000<span class='woocommerce-Price-currencySymbol'>VND</span>";
