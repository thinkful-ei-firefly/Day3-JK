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

