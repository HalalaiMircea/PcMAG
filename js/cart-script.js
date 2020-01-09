const root = 'https://jsonplaceholder.typicode.com/photos/';
let products_json;
let item_array;
let cart_content_div;

// This function displays the cart HTML page depending on what content there is in localStorage
function displayContent() {
    let head_tag = document.getElementsByTagName('head').item(0);
    let css_style = document.createElement('link');
    css_style.rel = 'stylesheet';
    css_style.type = 'text/css';
    item_array = JSON.parse(localStorage.getItem('item_array'));
    cart_content_div = document.getElementById('cart-content-div');

    if (item_array.length === 0) {
        css_style.href = 'css/empty-cart-style.css';
        head_tag.appendChild(css_style);
        setTimeout(displayEmptyCart, 100);
    } else {
        console.log('Cart is not empty');
        css_style.href = 'css/cart-style.css';
        head_tag.appendChild(css_style);
        setTimeout(displayFullCart, 100);
    }
}

function displayEmptyCart() {
    cart_content_div.innerHTML = "<h1>Your cart is empty 😢</h1>\n" +
        "<h4>Please return to the store to add products</h4>\n" +
        "<a href=\"index.html\">\n" +
        "    <div id=\"return-bttn-cont\">Return to Store</div>\n" +
        "</a>"
}

function displayFullCart() {
    let h1_tag = document.createElement('h1');
    h1_tag.textContent = 'My Cart';
    h1_tag.id = 'cart-h1';
    document.getElementById('main-body').insertBefore(h1_tag, cart_content_div);
    for (let i = 0; i < item_array.length; i++) {
        let a_elem = document.createElement('a');
        a_elem.className = 'item-link';
        a_elem.href = '#';
        a_elem.innerHTML = '<img class="item-img" src="' + item_array[i].url + '" alt="">';
        a_elem.onclick = function () {
            removeYourSelf(item_array[i], a_elem);
        };
        cart_content_div.appendChild(a_elem);
    }
}

function removeYourSelf(object, html_element) {
    // Remove the item from the array at that index
    item_array.splice(item_array.indexOf(object), 1);
    console.log(item_array);
    // Update the localstorage
    localStorage.setItem('item_array', JSON.stringify(item_array));
    // And remove the Node from the HTML doc
    cart_content_div.removeChild(html_element);
}
