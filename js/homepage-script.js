const root = 'https://jsonplaceholder.typicode.com/photos/';
let id = 1;
let f_items_div = document.getElementsByClassName('featured-items-div').item(0);

function createLinkElem(src_url) {
    let a_elem = document.createElement('a');
    a_elem.className = 'item-link';
    a_elem.href = '#';
    a_elem.innerHTML = '<img class="item-img" src="' + src_url + '" alt="">';
    f_items_div.appendChild(a_elem);
}

function getPost(img_number) {
    //We ask for any number of images in a sequence by id
    let max_id = id + img_number;
    fetch(root)
        .then(response => {
            return response.json();
        })
        .then(data => {
            //console.log(data);
            for (; id < max_id; id++) {
                createLinkElem(data[id].url);
            }
        })
        .catch(err => {
            console.log('ERROR: ', err.message);
        });
}

function htmlFunc() {
    //We ask the Post API for any number of images
    getPost(10);
}
