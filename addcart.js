function add() {
    let value = document.getElementById("quantity_6333e22b50564").value;
    document.getElementById("quantity_6333e22b50564").value = parseInt(value) + 1;
}

function sub() {
    let value = document.getElementById("quantity_6333e22b50564").value;
    if (value <= 1) return;
    document.getElementById("quantity_6333e22b50564").value = parseInt(value) - 1;
}


function addcart(id, img, name, link, price) {
    const x = document.getElementById("quantity_6333e22b50564") || 0;
    let num;
    if (x != 0) {
        num = parseInt(document.getElementById("quantity_6333e22b50564").value) || 1;
    }
    else { num = 1; }


    let numcart = window.localStorage.getItem("numcart") || 0;
    let newnumcart = parseInt(numcart) + num;
    window.localStorage.setItem("numcart", newnumcart);

    const cart = window.localStorage.getItem(id) || "";
    if (cart == "") {
        const obj = {
            "id": id,
            "img": img,
            "name": name,
            "link": link,
            "price": price,
            "num": num,
        }
        window.localStorage.setItem(id, JSON.stringify(obj));
    } else {
        let obj = JSON.parse(cart);
        obj.num = parseInt(obj.num) + num;
        window.localStorage.setItem(id, JSON.stringify(obj));
    }
    location.reload();
}