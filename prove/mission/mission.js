let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');
let content = document.querySelector('#content');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = 'black';
        logo.src = "images/byui-logo-white.png";
        body.style.color = 'white';
        content.style.border = '1px solid white';


    } else {
        document.body.style.backgroundColor = 'white';
        logo.src = "images/byui-logo-blue.webp";
        body.style.color = 'black';
        content.style.border = '1px solid black';


    }
}
