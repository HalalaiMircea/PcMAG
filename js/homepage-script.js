const root = 'https://jsonplaceholder.typicode.com/photos/';
let id = 1;
const f_items_div = document.getElementsByClassName('featured-items-div').item(0);
let products_json;

function createLinkElem(img_id, src_url) {
    let a_elem = document.createElement('a');
    a_elem.className = 'item-link';
    a_elem.href = '#';
    a_elem.innerHTML = '<img class="item-img" src="' + src_url + '" alt="">';
    // Function for each link in the homepage to add it's specific item data to localstorage
    a_elem.onclick = function () {
        let item_array;
        if (localStorage.getItem('item_array') == null) {
            item_array = [];
            //localStorage.setItem('item_array', JSON.stringify(item_array));
        } else {
            item_array = JSON.parse(localStorage.getItem('item_array'));
        }
        // We save it's ID from the DB and it's URL
        item_array.push({img_id: img_id, url: src_url});
        localStorage.setItem('item_array', JSON.stringify(item_array));
        console.log('Item added to localstorage!');
        console.log('Item_array in localstorage:');
        console.log(item_array);
    };
    f_items_div.appendChild(a_elem);
}

function loadMore(img_number) {
    let max_id = id + img_number;
    for (; id < max_id; id++) {
        createLinkElem(products_json[id].id, products_json[id].url);
    }
}

function getPost() {
    // We ask for any number of images in a sequence by id from the Post API
    fetch(root)
        .then(response => {
            return response.json();
        })
        .then(data => {
            products_json = data;
            loadMore(10);
        })
        .catch(err => {
            console.log('ERROR: ', err.message);
        });
}
