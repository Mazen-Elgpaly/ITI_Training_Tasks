// Task 1
var PlayerOneChoice = "Rock";
var PlayerTwoChoice = "scissors";

if (PlayerOneChoice === PlayerTwoChoice) {
  console.log("It's a tie!");
}
if (
  (PlayerOneChoice === "Rock" && PlayerTwoChoice === "scissors") ||
  (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") ||
  (PlayerOneChoice === "scissors" && PlayerTwoChoice === "Paper")
) {
  console.log("Player One wins!");
} else {
  console.log("Player Two wins!");
}

console.log("=======================================================");

// Task 2
var age = 20;
var PIvalue = 3.14;
var name = "Mazen";
var isStudent = true;
var emptyValue = null;
var unassigned;

var grade = 85;

if (typeof grade !== "number" || isNaN(grade)) {
  console.log("Invalid grade: Please enter a number.");
} else if (grade < 0 || grade > 100) {
  console.log("Invalid grade: Grade must be between 0 and 100.");
} else if (grade >= 90) {
  console.log("Excellent");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Average");
} else if (grade >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}

console.log("=======================================================");

// Task 3
var number = 8;
if (number > 0) {
  console.log("Number is positive.");
} else if (number < 0) {
  console.log("Number is negative.");
} else {
  console.log("Number is zero.");
}

if (number % 2 === 0) {
  console.log("Number is even.");
} else {
  console.log("Number is odd.");
}
