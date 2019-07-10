'use strict';

function createMyObject () {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function () {
      return 'hello';
    }
  };
}
let thisObj = createMyObject();

function updateObject(obj){
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
    return obj;
}

let newObj = updateObject(thisObj);
console.log(newObj.bizz);


