//---------------------------- Question 1 ---------------------------------

// let user = {};
// user.name = "John"
// user.surname = "Smith"
// user.name = "Pete"
// delete user.name
// console.log(user);

// ---------------------------Question 2 ----------------------------

// let obj = {};
// // obj.name = "Hola";
// function isEmpty(obj) {
//   if (Object.keys(obj).length === 0) {
//     return true;
//   } else return false;
// }

// console.log(isEmpty(obj));

// ---------------------------Question 3 ----------------------------

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// let salarySum = (salaries) => {
//   if (Object.keys(salaries).length === 0) return 0;
//   else {
//     for (let key in salaries) {
//       sum += salaries[key];
//     }
//     return sum;
//   }
// };
// console.log(salarySum(salaries));

// ---------------------------Question 4 ----------------------------

let calculator = {
  a: 0,
  b: 0,

  read() {
    calculator.a = prompt("Enter 1st value");
    calculator.b = prompt("Enter 2nd value");
  },

  sum() {
    return Number(calculator.a) + Number(calculator.b);
  },

  mul() {
    return Number(calculator.a) * Number(calculator.b);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
