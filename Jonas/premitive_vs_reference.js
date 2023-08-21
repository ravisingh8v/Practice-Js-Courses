let age = 30;
let oldAge = age;
age = 35;

console.log(oldAge);

const person = {
  name: "ravi",
  age: "22",
};

const person2 = JSON.parse(JSON.stringify(person));
person2.name = "suraj";
person.age = 35;

var person3 = person2;
person3.name = "third";
person3.age = 50;

console.log(person2);
