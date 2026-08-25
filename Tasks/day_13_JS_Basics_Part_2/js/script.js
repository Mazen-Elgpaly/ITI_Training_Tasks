let car = {
  brand: `BMW`,
  model: `E36`,
  year: 1995,
  color: `black`,
  engine: `B30W20`,
  transmission: `manual`,
  cc: 2000,
  drive(dest) {
    console.log(`Car is moving to ${dest}`);
  },
  driver: {
    fullName: `Hady`,
    age: 34,
    city: `Cairo`,
    job: `Driver`,
    salary: 15000,
  },
};
let carJSON = JSON.stringify(car);
console.log(`JSON string:`, carJSON);

let parsedCar = JSON.parse(carJSON);
console.log(`Parsed object:`, parsedCar);

let friends = [`Amr`, `Hady`, `Ziad`, `Ahmed`, `Omar`, `Ali`];
console.log(`Original array:`, friends);
console.log(`Length:`, friends.length);
console.log(`first element: `, friends[0]);
console.log(`second element: `, friends[1]);

let mixedArray = [`Mostafa`, 23, 15.12, 999999999, true, null, undefined];
console.log(`Mixed array: ${mixedArray}`);

for (let i = 0; i < mixedArray.length; i++) {
  console.log(`Item ${i + 1}: ${mixedArray[i]}`);
}

let obj1 = { first: `Mohamed`, last: `Hany`, count: 26, isValid: true };
let obj2 = { message: `Hello User`, title: `Read a book` };
let arrOfObjects = [obj1, obj2];
console.log(`Array of objects:`, arrOfObjects);
console.log(`First object first name:`, arrOfObjects[0].first);

friends.sort();
console.log(`After sort:`, friends);

friends.push(`Mazen`);
friends.push(`Sayed`, `Youssef`, `Fathy`);
console.log(`After push:`, friends);

friends.unshift(`Noura`);
console.log(`After unshift:`, friends);

let popped = friends.pop();
console.log(`After pop:`, friends, `Popped item:`, popped);

let shifted = friends.shift();
console.log(`After shift:`, friends, `Shifted item:`, shifted);

friends.splice(2, 2, `Fathy`, `Sayed`);
console.log(`After splice:`, friends);

let sliced = friends.slice(1, 4);
console.log(`Sliced (1,4):`, sliced);

friends.reverse();
console.log(`After reverse:`, friends);

console.log("Includes `Amr`:", friends.includes(`Amr`));

console.log("Index of `Ziad`:", friends.indexOf(`Ziad`));
console.log("Index of `Rowida`:", friends.indexOf(`Rowida`)); // -1

friends = [`Amr`, `Hady`, `Amr`, `Ahmed`, `Amr`, `Ali`];
console.log("Last index of `Amr`:", friends.lastIndexOf(`Amr`));

console.log(`Array as string:`, friends.toString());

let myString = `Web Design & Development and having fun`;
console.log(`Original string:`, myString);

console.log(`charAt(2):`, myString.charAt(2));
console.log(`at(4):`, myString.at(4));

console.log(`slice(6):`, myString.slice(6));

console.log(`lower:`, myString.toLowerCase());
console.log(`upper:`, myString.toUpperCase());

console.log(`concat:`, myString.concat(` and learning more...`));

let padded = `      Web Design & Development and having fun          `;
console.log(`trimEnd:`, padded.trimEnd());
console.log(`trimStart:`, padded.trimStart());
console.log(`trim:`, padded.trim());

let words = myString.split(` `);
console.log(`Split by space:`, words);

let chained = myString.split(` `).slice(0, 4).join(` `).trim();
console.log(`Chained result:`, chained);

let searchTerm = `SaMsUnG`;
console.log(
  "Search `NG` case-insensitive:",
  searchTerm.toLowerCase().includes(`ng`.toLowerCase()),
);

console.log(
  "Replace first `and`:",
  `web design and development and fun`.replace(`and`, `&`),
);
console.log(
  "Replace all `and`:",
  `web design and development and fun`.replaceAll(`and`, `&`),
);

console.log(`padEnd:`, `100000`.padEnd(10, `X`));
console.log(`padStart:`, `100000`.padStart(10, `X`));

var x = 1;
console.log(`var x initial:`, x);
var x = 5; // no error
console.log(`var x after redeclaration:`, x);

console.log(`hoistedVar before declaration:`, hoistedVar); // undefined
var hoistedVar = `Ahmed`;
console.log(`hoistedVar after declaration:`, hoistedVar);

var y = 10;
if (y == 10) {
  var y = 20;
  console.log(`var y inside if: ${y}`);
}
console.log(`var y outside if: ${y}`); // 20 (access to global)

function testVarScope() {
  if (true) {
    var z = 50;
  }
  console.log(`var z inside function:`, z);
}
testVarScope();
// console.log(z); // error (out of scope)

let a = 1;
// let a = 2; // error of repeat declaration of the same variable name
a = 2;
console.log(`let a after reassignment:`, a);

// console.log(b); // error of using before intialization
let b = 5;
console.log(`let b after declaration:`, b);

let c = 10;
if (c == 10) {
  let c = 20;
  console.log(`let c inside if:`, c);
}
console.log(`let c outside if:`, c);

function testLetScope() {
  if (true) {
    let d = 30;
  }
  // console.log(d); // error (out of  if scope)
  let e = 40;
  console.log(`let e inside function:`, e);
}
testLetScope();
// console.log(e); // error (out of function scope)

const PI = 3.14;
console.log(`let PI:`, PI);
// PI = 3.15; // error

if (true) {
  let message = `Inside if`;
  console.log(message);
}
// console.log(message); // error (out of  if scope)

let uniqueElement = document.getElementById(`unique`);
console.log(`getElementById:`, uniqueElement);

let items = document.getElementsByClassName(`item`);
console.log(`getElementsByClassName (HTMLCollection):`, items);
Array.from(items).forEach((item) => console.log(`Item:`, item));

let divs = document.getElementsByTagName(`div`);
console.log(`getElementsByTagName div:`, divs);

let emailInput = document.getElementsByName(`email`);
console.log(`getElementsByName email:`, emailInput);

let firstItemH3 = document.querySelector(`.item h3`);
console.log(`querySelector .item h3:`, firstItemH3);

let allH3 = document.querySelectorAll(`.item h3`);
console.log(`querySelectorAll .item h3:`, allH3);
allH3.forEach((h3) => console.log(`H3 text:`, h3.textContent));

console.log(`body:`, document.body);
console.log(`title:`, document.title);
console.log(`head:`, document.head);
console.log(`links:`, document.links);
console.log(`forms:`, document.forms);
console.log(`images:`, document.images);

let paragraphs = document.querySelectorAll(`.paragraph-section p`);
paragraphs.forEach((p) => console.log(`Paragraph:`, p.textContent));

let demoDiv = document.querySelector(`.demo`);
if (demoDiv) {
  demoDiv.style.color = `white`;
  demoDiv.style.backgroundColor = `black`;
}

function sayHello(userName) {
  console.log(`Hello ${userName}`);
}

let loginBtn = document.querySelector(`.loginBtn`);
if (loginBtn) {
  loginBtn.addEventListener(`click`, function () {
    sayHello(`Ahmed`);
  });
}

let demoDivs = document.querySelectorAll(`.demo`);
demoDivs.forEach((div, index) => {
  div.addEventListener(`click`, function () {
    console.log(`User clicked on div number: ${index + 1}`);
  });
});

let htmlElement = document.querySelector(`.demo`); // grap first div have (demo) class only  because using querySelector (not querySelectorAll)

htmlElement.addEventListener(`click`, () => console.log(`Single click!`));
htmlElement.addEventListener(`dblclick`, () => console.log(`Double click!`));

document.addEventListener(`contextmenu`, (e) => e.preventDefault());

document.addEventListener(`keydown`, (e) => {
  if (e.keyCode === 123) {
    e.preventDefault();
    console.log(`F12 disabled`);
  }
});

htmlElement.addEventListener(`mousemove`, (e) => {
  console.log(`Mouse position: X=${e.clientX}, Y=${e.clientY}`);
});

htmlElement.addEventListener(`mousedown`, () =>
  console.log(`Mouse button down`),
);
htmlElement.addEventListener(`mouseup`, () => console.log(`Mouse button up`));

htmlElement.addEventListener(`mouseenter`, () =>
  console.log(`Mouse entered element`),
);
htmlElement.addEventListener(`mouseleave`, () =>
  console.log(`Mouse left element`),
);

let draggableDiv = document.querySelector(`[draggable="true"]`);
if (draggableDiv) {
  draggableDiv.addEventListener(`drag`, () =>
    console.log(`User is dragging the element`),
  );
}

document.addEventListener(`keydown`, (e) => {
  if (e.key === `r`) {
    console.log("User pressed `r` key");
  }
});

document.addEventListener(`keypress`, (e) => {
  console.log(`Key pressed (printable): ${e.key}`);
});

document.addEventListener(`keyup`, (e) => {
  console.log(`Key released: ${e.key}`);
});

function printInvoice() {
  console.log(`Invoice has been saved to PDF file.`);
}
document.addEventListener(`keydown`, (e) => {
  if (e.key.toLowerCase() === `p`) {
    printInvoice();
  }
});

let inputField = document.querySelector(`.demo`);
if (inputField) {
  inputField.addEventListener(`focus`, () => console.log(`Input focused`));
  inputField.addEventListener(`blur`, () => console.log(`Input lost focus`));
}

document.body.addEventListener(`click`, (e) => {
  console.log(`Click coordinates: ${e.clientX} , ${e.clientY}`);
  console.log(`Target element: ${e.target}`);
});
