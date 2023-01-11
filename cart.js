function add(id) {
    let numcart = window.localStorage.getItem("numcart") || 0;
    let newnumcart = parseInt(numcart) + 1;
    window.localStorage.setItem("numcart", newnumcart);

    const cart = window.localStorage.getItem(id) || "";
    let obj = JSON.parse(cart);
    obj.num = parseInt(obj.num) + 1;
    window.localStorage.setItem(id, JSON.stringify(obj));
    location.reload();
}

function sub(id) {
    let value = document.getElementById("quantity_6333e22b50564").value;
    if (value <= 0) return;
    let numcart = window.localStorage.getItem("numcart") || 0;
    let newnumcart = parseInt(numcart) - 1;
    window.localStorage.setItem("numcart", newnumcart);

    const cart = window.localStorage.getItem(id) || "";
    let obj = JSON.parse(cart);
    obj.num = parseInt(obj.num) - 1;
    window.localStorage.setItem(id, JSON.stringify(obj));
    location.reload();
}

function deleteItem(id) {
    window.localStorage.removeItem(id)
}

const allcartitem = document.getElementById("all-cart-item");
let strCart = "";
let subTotalPrice = 0;
for (let i = 1; i < 100; i++) {
    const item = window.localStorage.getItem(i.toString()) || "";
    if (item != "") {
        const obj = JSON.parse(item);
        const subtotal = parseInt(obj.price) * parseInt(obj.num);
        subTotalPrice += subtotal;
        strCart += `
            <tr class="woocommerce-cart-form__cart-item cart_item">
            
                <td class="product-remove">
                    <a href="cart.html"class="remove"
                        aria-label="Xóa sản phẩm này" data-product_id="29461"
                        data-product_sku="" onclick="deleteItem(`+ i + `)">×</a>
                </td>
            
                <td class="product-thumbnail">
                    <a href="`+ obj.link + `"><img
                        src= "`+ obj.img + `"
                        class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt="`+ obj.name + `"
                         width="300"
                        height="300"></a>
                </td>
            
                <td class="product-name" data-title="Sản phẩm">
                    <a href="`+ obj.link + `"><p>` + obj.name + `</p></a>
                </td>
            
                <td class="product-price" data-title="Giá">
                    <span class="woocommerce-Price-amount amount">`+ obj.price + `,000
            <span class="woocommerce-Price-currencySymbol">VND</span></bdi ></span >
                </td>
            
                <td class="product-quantity" data-title="Số lượng">
                    <div class="quantity buttons_added form-minimal">
                        <input type="button" value="-"
                            class="minus button is-form" onclick="sub(`+ obj.id + `)">
                            <input type="number" id="quantity_6333e22b50564"
                                class="input-text qty text" step="1" min="1" max=""
                                name="quantity" value="`+ obj.num + `" title="SL" size="4"
                                placeholder="" inputmode="numeric">
                                <input type="button" value="+"
                                    class="plus button is-form" onclick="add(`+ obj.id + `)">
                                </div>
                            </td>
            
                            <td class="product-subtotal" data-title="Tạm tính">
                                <span class="woocommerce-Price-amount amount sub-total"><bdi>`+ subtotal + `,000<span
                                    class="woocommerce-Price-currencySymbol">VND</span></bdi></span>
                            </td>
                        </tr>`;
    }
}

allcartitem.innerHTML = strCart;

document.getElementById("sub-total").innerHTML = subTotalPrice + ",000<span class='woocommerce-Price-currencySymbol'>VND</span>";
document.getElementById("total").innerHTML = (subTotalPrice + 25) + ",000<span class='woocommerce-Price-currencySymbol'>VND</span>";

const ship = document.getElementsByClassName("woocommerce-shipping-destination") || "";
str = "Vận chuyển đến <strong>Hồ Chí Minh</strong>. "

let addrShip = window.localStorage.getItem("addrShip") || "";
if (addrShip == "") {
    ship[0].innerHTML = str;
}
else ship[0].innerHTML = "Vận chuyển đến <strong>" + addrShip + "</strong>.";