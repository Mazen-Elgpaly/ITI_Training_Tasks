isAvailable = true;
var memberStatus = isAvailable ? "Ready for projects" : "Not available";
console.log(`${memberStatus}`);

console.log(`=======================================`);

var x = 50;
function localScope() {
  var x = 20;
  console.log(x);
}
localScope(); // 20
console.log(x); // 50

console.log(`=======================================`);

function calculateSalary(base, bonus = 0) {
  return base + bonus;
}
calculateSalary(15000, 3000);

console.log(`=======================================`);

const multiply = (a, b) => a * b;
multiply(4, 5);

console.log(`=======================================`);

var start = 3;
var end = 15;
var firstOdd = start % 2 === 0 ? start + 1 : start;

for (var i = firstOdd; i <= end; i += 2) {
  console.log(i);
}

console.log(`=======================================`);

var counter = 3;
while (counter > 0) {
  console.log(`Countdown: ${counter}`);
  counter--;
}

console.log(`=======================================`);

var step = 5;
do {
  console.log(`Step number: ${step}`);
  step++;
} while (step < 1);

console.log(`=======================================`);

(function () {
  var x = 5;
  var y = 10;
  console.log(`sum is ${x + y}`);
})();

console.log(`=======================================`);
var person = {
  fullName: `Mazen Mohamed`,
  age: 22,
  gender: `Male`,
  job: `Developer`,
  salary: 18500,
  city: `Cairo`,
  isStudent: true,
  skills: [`JavaScript`, `HTML`, `CSS`, `React`, `Node.js`],
  eat: function (meal) {
    console.log(`Eating ${meal}`);
  },
};

console.log(`Primary Skill: ${person.skills[0]}`);

Object.keys(person).forEach((key) => console.log(key));
console.log(`=====================`);
Object.values(person).forEach((value) => console.log(value));

console.log(`=======================================`);
