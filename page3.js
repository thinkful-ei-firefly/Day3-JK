'use strict';

let loaf = {
  flour: 300,
  water: 210,
  hydration: function () {
    return this.water/this.flour*100;
  }
}

/*console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());*/

let fooObj = {
    foo: "hello",
    bar: "goodbye",
    fum: "today",
    quux: "42",
    spam: "juink"
}
/*for (const key in fooObj){
    console.log(`${key}: ${fooObj[key]}`);
}*/

let hobbitMeals= {
  meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

//console.log(hobbitMeals.meals[3]);

let one = [{name: "Jeremy", jobTitle: "a Carpenter"},
 {name: "Sophie", jobTitle: "a Clerk"},
 {name: "Tom", jobTitle: "a Astronaut"},
 {name: "Aragorn", jobTitle: "a King"},
 {name: "Boromir", jobTitle: "Dead"}]

 /*for (let i = 0; i < one.length; i++){
     console.log(`${one[i].name} is ${one[i].jobTitle}`);
 }*/