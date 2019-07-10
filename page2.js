'use strict';


function makeStudentReport (data) {
  let report = [];

  for (let i = 0; i < data.length; i++) {
    report.push(`name: ${data[i].name}, grade: ${data[i].grade}`);
  }
  return report;
}


const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

function enrollInSummerSchool(students){
  for (let i = 0; i < students.length; i++){
    students[i].status = "In Summer School";
  }
  return students;
}

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];


function findById (items, idNum) {
  for (let i=0; i <items.length; i++) {
    if (items[i].id === idNum) {
      return items[i];
    }
  }
}


const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];
//console.log(findById(data, 2)); // should return {id: 2, foo: 'bizz'}


function validateKeys(object, expectedKeys){
    let keys = Object.keys(object);
    for (let i = 0; i < expectedKeys.length; i++){
        if (keys[i] !== expectedKeys[i])
            return false;
    }
    return true;
}

const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };
  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };
  const expectedKeys = ['id', 'name', 'age', 'city'];
  //console.log(validateKeys(objectA, expectedKeys));
  //console.log(validateKeys(objectB, expectedKeys));