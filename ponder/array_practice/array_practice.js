const steps = ['one', 'two', 'three'];

// .forEach() method

steps.forEach(function (step) {
    console.log(step);
})

let myList = document.querySelector('#myList');

//.map() method

const stepsHtml = steps.map(listTemplate);

function listTemplate(step) {
    return `<li>${step}</li>`;
}

console.log(stepsHtml);

myList.innerHTML = stepsHtml.join('');

let grade = ['A', 'B', 'C', 'D', 'F'];
let points;

let gpaPoints = grade.map(convert);

function convert(grade) {
    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

console.log(gpaPoints);

// .reduce

let totalPoints = gpaPoints.reduce(getTotal);

    function getTotal(total, items) {
        return total + items;
    }

console.log(totalPoints);

let gpaAverage = totalPoints / grade.length;

console.log(gpaAverage);


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
         
const shortWords = words.filter(function(word){
    return word.length < 6;
})

console.log(shortWords);



const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
      
let container = document.querySelector('#studentContainer');

students.forEach(function(item){
    let name = document.createElement('div');

    let html = `
    <span>${item.first}</span>
    <span>${item.last}</span>
    ` 

    name.innerHTML = html;
    container.appendChild(name);
})