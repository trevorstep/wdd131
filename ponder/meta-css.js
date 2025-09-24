
const PI = 3.14;
let radius = 3;

let area = radius * radius * PI;

console.log(area);

radius = 20;

area = radius * radius * PI;

console.log(area);


const one = 1;
const two = '2';

console.log(one)
console.log(two)


let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
    console.log(course); //works fine, course is global
    console.log(student); //does not work, can't access a block variable outside the block
}


let selectElem = document.getElementById('webdevlist');
document.querySelector('#html').style.color = 'black';
document.querySelector('#css').style.color = 'black';
document.querySelector('#js').style.color = 'black';
selectElem.addEventListener('change', function () {
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
})

const image = document.querySelector('img');
image.setAttribute('src', 'images/html-js-css.jpg');
image.setAttribute('alt', 'new logo with black backround')

document.body.style.backgroundColor = 'black';