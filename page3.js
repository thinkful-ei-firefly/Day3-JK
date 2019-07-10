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

let one = [{name: "Jeremy", jobTitle: "Carpenter", boss: 'Sophie'},
  {name: "Sophie", jobTitle: "Clerk", boss: 'Boromir'},
  {name: "Tom", jobTitle: "Astronaut", boss: 'Aragorn'},
  {name: "Aragorn", jobTitle: "King"},
  {name: "Boromir", jobTitle: "Dead", boss: 'Death'}]

/*for (let i = 0; i < one.length; i++){
  if (one[i].boss === undefined) {
    console.log (`${one[i].jobTitle} ${one[i].name} doesn\'t report to anybody`)
  } else{
    console.log(`${one[i].jobTitle} ${one[i].name} reports to ${one[i].boss}`);
  }
}*/

let cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
}

function decode(code){
    let letter = code.charAt(0);
    let num = cipher[letter];
    if (num !== undefined)
        return code.charAt(num - 1);
    return ' ';
}

function breakCode(code){
    let splitCode = code.split(" ");
    let brokenCode = '';
    for (let i = 0; i < splitCode.length; i++){
        brokenCode += decode(splitCode[i]);
    }
    return brokenCode;
}
//console.log(breakCode('craft block argon meter bells brown croon droop'));