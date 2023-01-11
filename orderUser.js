const all_order = document.getElementById("all-order-user");
const user = window.localStorage.getItem("login")||"";
let str = ""
for (let i = 100; i < 200; i++) {
    const orderitem = window.localStorage.getItem(i) || "";
    if (orderitem != "") {
        const order = JSON.parse(orderitem);
        console.log(user,order.user);

        if (user == order.user) {
            str += `<tr>
            <td>
                <p style="padding-left:1.5rem">`+(i-99)+`</p>
            </td>
            
            <td class="product-name" data-title="Sản phẩm">
            `+order.item+`
            
            </td>
            <td>
                <p>`+order.name+`</p>
                <p>`+order.email+`</p>
                <p>`+order.phone+`</p>
            </td>
            <td>
                <p>`+order.shipping_state+`</p>
                <p>`+order.address+`</p>
            </td>
            <td>
                <p>`+order.order_comments+`</p>
            </td>
            <td class="product-subtotal">
                <span class="woocommerce-Price-amount amount"><bdi>`+order.total+`,000<span
                            class="woocommerce-Price-currencySymbol">VND</span></bdi></span>
            </td>
            </tr>`
        }
    }
}

all_order.innerHTML=str;
