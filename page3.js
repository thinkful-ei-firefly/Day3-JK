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


function createCharacter (name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function () {console.log(`${this.name} is a ${this.race} from ${this.origin} and uses ${this.weapon}`)},
    evaluateFight: function (character) {
      let damageDealt = this.attack-character.defense;
      let damageTaken = character.attack - this.defense;
      if (damageDealt < 0) {damageDealt = 0};
      if (damageTaken < 0) {damageTaken = 0};
      return `Your opponent takes ${damageDealt} damage and you receive ${damageTaken} damage`;
    }
  }
}

let characters = [
  createCharacter ('Gandalf the White', 'Gandalf', 'wizard', 'Middle Earth', 10, 6, 'Wizard Staff'),
  createCharacter ('Bilbo Baggins', 'Bilbo', 'hobbit', 'The Shire', 2, 1, 'The Ring'),
  createCharacter ('Frodo Baggins', 'Frodo', 'hobbit', 'The Shire', 3, 2, 'Sting and Barrow Blade'),
  createCharacter ('Aragorn son of Arathorn', 'Aragorn', 'human', 'Dunnedain', 6, 8, 'Anduril'),
  createCharacter ('Legolas', 'Legolas', 'elf', 'Woodland Realm', 8, 5, "Bow and Arrow"),
];

characters.push(createCharacter('Arwen Undomiel', 'Arwen', 'half-elf', 'Rivendell', 4, 4, 'Hadafang'));

/*let arag = characters.find(function(item) {
    if (item.nickname === 'Aragorn')
        return true;
    return false;
});
arag.describe();*/

/*let hobbits = characters.filter(function(item){
    if (item.race === 'hobbit')
        return true;
    return false;
});
console.log(hobbits);*/

/*let strong = characters.filter(function(item){
    return item.attack > 5;
});
console.log(strong);*/
//characters[4].describe();
//console.log(characters[1].evaluateFight(characters[0]));
