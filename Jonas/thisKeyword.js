"use strict";

// function cl(value) {
//   console.log(value);
// }
// console.log(this);

// function calcAge(getAge) {
//   cl(2023 - getAge);
//   cl(this);
// }

// calcAge(2003);

const ravi = {
  firstName: "ravi",

  printNameArrow: () => {
    console.log(this.firstName);
  },

  printName() {
    console.log(this.firstName);
  },
};

ravi.printNameArrow();
ravi.printName();
const me = {
  firstName: "amresh",
};

me.createFunction = ravi.printName;
me.createFunction();
