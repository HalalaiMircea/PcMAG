//<link rel="stylesheet" type="text/css" href="css/empty-cart-style.css">
/*<h1>Your cart is empty 😢</h1>
<h4>Please return to the store to add products</h4>
<a href="index.html">
    <div id="return-bttn-cont">Return to Store</div>
</a>*/


// This function displays the cart HTML page depending on what content there is in localStorage
function displayContent() {
    if (localStorage.getItem('item_array') == null) {
        let css_style = document.createElement('link');
        css_style.rel = 'stylesheet';
        css_style.type = 'text/css';
        css_style.href = 'css/empty-cart-style.css';
        document.getElementsByTagName('head').item(0).appendChild(css_style);
        document.getElementById('empty-cart-div').innerHTML = "<h1>Your cart is empty 😢</h1>\n" +
            "<h4>Please return to the store to add products</h4>\n" +
            "<a href=\"index.html\">\n" +
            "    <div id=\"return-bttn-cont\">Return to Store</div>\n" +
            "</a>"
    } else {
        console.log('Cart is not empty');
        
    }
}