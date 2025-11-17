const nums = [14,25,3,5];

console.log(nums.sort(compareFn));


const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];
                


let lowerList = simpleList.map(function(fruit){
    return fruit.toLowerCase();
})



// filter

let searchTerm ='t';
let filterFruit = lowerList.filter(searchFruit);

function searchFruit(fruit){
    return fruit.includes(searchTerm); // Find out if the value exsits in the string
}

console.log(filterFruit);



function compareFn(a,b) {
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  }
 return 0;
}
                


const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];
                

console.log(products.sort(compareFn));


const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];
              
let query = 'dog';

let filteredList = animals.filter(searchList)

function searchList(item){
    return item.name.toLowerCase().includes(query.toLowerCase());
}

console.log(filteredList)

let queryTrait = 'strong';

let fitleredTraits = animals.filter(searchTraits);

function searchTraits (item){
    return item.traits.find(trait =>
        trait.toLowerCase().includes(queryTrait.toLowerCase()));
}

console.log(fitleredTraits);