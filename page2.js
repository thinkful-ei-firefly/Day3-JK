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

