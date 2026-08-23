// window.alert("Hello from window JS");
// document
// console.log("Hello World from JS")

// console.log(window.location.href);
// console.log(window.history);

// console.log("Hello Console!")
// console.info("This is an information")
// console.error("This is an error")
// console.warn("This is a warning")

// var userName = "Ahmed";
// window.alert(userName);
// console.log(userName);

// var user = {
//     userName: "Ahmed Ali",
//     age: 34
// };
// console.log(user.userName);
// console.log(user.age);

// for (var i = 1; i < 11; i++) {
//     console.log(i);
// }

// One Line Comment

/*
    - Multi-line comment
    * Important comment
    ! This is a warning
    ? Is This a Javascript comment?
    TODO: I will impelement the logic here...
*/

// var userName = "ali";
// var UserName = "Ahmed";
// console.log(userName);
// console.log(UserName);

// Javascript automatic semi colon insertation  => ; 
// علشان لما تعمل minify الكود مش ييبقى فيه مشكله

// ================================== \\

/* Naming Conventions 
    - https://www.w3schools.com/js/js_reserved.asp
    var name = "ahmed";
    console.log(name);

    - Can't start with a number or special character but [   _   or  $  ] but not prefered

    - There's no spaces just one word!
    var user name = "";

    - Keep it simple asp
    => adminuserlastnamefavone   => admin_user_last_name   => adminUserLastName

    - Keep it sticking to a real meaning
    var ksuwy26 = "userName"
*/

/*

==  Data Types ==
JS is loosly typed language => يعني مش بتحتاج تحدد نوع البيانات قبل ما تشتغل

-- Premitive DataType --
- string    => " This is a string " || 'C'  || "@$%&&*)"  || "true"  || `` || ''  || ""
- Number    => Any number (1 , 10101010, 0.4, 0.00004, -15, 999999999999)
- Boolean   => true, false | var isAdmin = false; |  onSale = true;
- undefined => (value, type)   => var age;
- null      => (type object)   => nothing   | var image = null;

-- Non Premitive DataType --
Object      =>
Array       =>
Function    =>

*/

/*  Log + DataType  */
// ------------------------------------------\\
// var helloString = "hello world!";
// console.log(helloString);

// var userAge = 26;
// console.log(userAge);

// console.log(typeof helloString);
// console.log(typeof userAge);

// console.log("UserAge:", userAge, "Data Type:", typeof userAge);
// console.log("Welcome String is:", helloString, "Data Type:", typeof helloString);

// var onSale = true;
// console.log(onSale);
// console.log(typeof onSale);

// var undef = undefined;
// console.log(undef);

// var IntNumber = 14;
// var PIvalue = 3.14;
// var result = 15 + 4;

// console.log(typeof IntNumber);
// console.log(typeof PIvalue);
// console.log(typeof result);

// var sum = 10 + 5;
// console.log(sum);

// var squareRoot = Math.sqrt(25);
// console.log(squareRoot);

// var numString = "25";
// console.log(numString);
// console.log(typeof numString);
// var convertedNumber = parseInt(numString);
// console.log(convertedNumber);
// console.log(typeof convertedNumber);

// var float = "3.14";
// var convertedNumber = parseFloat(float)
// console.log(typeof convertedNumber);
// ------------------------------------------\\

// var singleQuote = 'C';
// var doubleQuote = "This is a sentence!";

// var userName = "Mohamed";
// var templateLiteral = `Hello ${userName}`;
// console.log(templateLiteral);

// var firstName = "Hany";
// var lastName = "Sameh";
// var fullName = firstName + " " + lastName;
// var fullNameTemplate = `${firstName} ${lastName}`
// console.log(fullName);
// console.log(fullNameTemplate);


// var text = "Javascript is amazing"
// text.length();
// text.toUpperCase();
// text.indexOf("amazing");
// ------------------------------------------\\

// -- Aritmathic Operators -- \\
// var x = 10;
// console.log(x + 5);
// console.log(x - 3);
// console.log(x * 2);
// console.log(x / 5);
// console.log( parseInt(x / 4) );
// console.log(x ** 2);
// console.log(x % 10);
// console.log(x % 9);
// console.log(++x);
// console.log(--x);

// var x = 10;
// x += 20
// x -= 20
// x *= 20
// console.log(x);

// x = x + 20;
// console.log(x);


// ------------------------------------------\\

// var x = "20";
// var y = 20;

/* 
    == -> check only the value
    === -> check the value and data type in the same time
*/

// console.log(x !== y);

// ------------------------------------------\\

// var x = 3;
// var y = 4;

//           true  and true = true
// console.log(x == 3 && y == 4);

// AND return first false
// لازم كله يكون true
//          false     true     true = false
// console.log(x == y && y == 4 && true);
//           true     false     true = false
// console.log(y == 4 && x == y &&  true);

// OR return first true
// على الاقل واحده true
//          false     true
// console.log(x == 5 || y == 4);
// console.log(!true);
// console.log(!false);

/*== Interview Questions == */
// var x = 3 + 4;
// var x = "ITI" + " Course"
// var x = "3" + "4"
// var x = "3" + 4 + 5
// var x = 4 + "3" + 6
// var x = 3 + "4"
// var x = 4 + 4 + 4 + "4"  // 124 string
// var x = "4" + 4 + 4 + 4 // 4444

// implicit conversion || التحويل الضمني لانواع البيانات
// var x = "4" * "5"
// console.log( Number("4") * Number("5") );
// console.log(Number("10")); // number datatype

// var x = "ITI" * 10 // Not a Number (NaN)
// console.log(x);

// var x = Number("5") * Number("10");
// var x = Number("5") * Number(10);
// var x = Number("5") * "6";
// var x = "6" * Number("5");
// var x = "4" * true
// console.log(Number("")); // 0
// console.log(Number(" ")); // 0

// var x = "ITI" * 10
// console.log(x);
// console.log(typeof NaN);

// var firstNum = window.prompt("Enter first number:");
// var secondNum = window.prompt("Enter second number:");
// var result = Number(firstNum) + Number(secondNum);
// console.log(result);

// ======================== \\

// ' == '     => Abstract Equallity || المساوه في المطلق بيقارن بين القيم فقط
// ' === '    => Strict Equallity   || بتقارن القيمة و نوع البيانات

// ======================== \\
// console.log("ali" && true); // true
// console.log("ali" && "" && "ahmed"); // " "
// console.log("ali" && " " && "ahmed"); // "ahmed"
// console.log(true && 22);
// console.log("" || "ali");

//           true       true        false
// console.log("ahmed" && undefined && false);
//            false        true
// console.log(undefined && "ahmed");
//           false    true
// console.log(null && "string");
// console.log("string" && "string2" && null);

// var x = undefined; // false
// var x = null; // false
// var x = NaN; // false
// var x = false; // false
// var x = 0; // false
// var x = ""; // flase with conversion

// console.log(undefined || "ahmed");
/* == Interview Questions == */

// var my_string = 'A';
// ASCII_value = my_string.charCodeAt(0);
// console.log(ASCII_value);

/* == Game == */
// var firstName = "Ahmed";
// var lastName = "Hany";
// var result = firstName.slice(0, 3) + lastName.charAt(0);
// console.log(result);

// var firstNum = 10;
// var secondNum = "5";
// var result = firstNum * parseInt(secondNum);
// console.log(result);

// var string1 = "Hello";
// var string2 = "World";
// var combined = string1.concat(" ", string2);
// console.log(combined);

// var division = 15 / 4;
// console.log(division);
/* == Game == */

// var userName = "ALFY";
// var userAge = 32;
// var isStudent = true;
// console.log(`User Name: ${userName} & User Age: ${userAge}`);
// userAge += 5;
// console.log(`User Age after update: ${userAge}`);
// console.log(`User Name: ${userName} & User Age: ${userAge}, Student Status: ${isStudent}`);

// str1 = "Hello"
// str2 = "World"
// finalString = str1 + " " + str2

// var str1 = "Hello";
// var string2 = "World";
// var finalString = str1.concat(" ", string2);

// console.log("The man said, \"please speak to me\"");
// console.log("The man said, 'please speak to me'");
// console.log('Hello it\'s my cat');
// console.log("Hello it's my cat");
// console.log(`The man said, "Please, Speak to me!"`);
// console.log(`Hello it's my cat`);
// console.log("This is spcecial Character: \\");
// console.log(`This is spcecial Character: \\ ' "" '`);

// var backendResponse = `Hello it's my cat, And The man said "it's very good"`
// console.log(`${backendResponse}`);

// console.log(`I'm a software developer \nAnd I'm genius!`); // newline
// console.log(`Are you here\t \t \tlet's go`);

// var mystring = "Ahmed";
// console.log(mystring.charAt(1));
// for (var i = 0; i < mystring.length; i++) {
//     console.log(mystring.charAt(i));
// }

// var condition = value;

// if (condition) {
//     // if true or exist or right
//     // execute code
// } else {
//     // if false or not exist not right
//     // execute code
// }

// var userAge = 20;
// if (userAge > 16) {
//     console.log(`You can register`);
// } else {
//     console.log(`You can't register`);
// }

// var userAge = 15;
// if (userAge > 18) {
//     console.log(`You're an adult!`);
// } else {
//     console.log(`You're too young!`);
// }

// var num = 10;
// if (num > 0) {
//     console.log(`Number is positive`);
// } else if (num < 0) {
//     console.log(`Number is negative`);
// } else {
//     console.log(`Number equal to zero`);
// }

// var userAge = 23;
// var hasLicense = true;
// if (userAge > 18) {
//     console.log(`You can drive, Do you have a license?`);
//     if (hasLicense === true) {
//         console.log(`You can drive`);
//     } else {
//         console.log(`You must get a license first!`);
//     }
// } else {
//     console.log(`You can't drive, you're too young!`);
// }

// var userRole = `marketer`;
// switch (userRole) {
//     case `admin`:
//         console.log(`You're an admin`);
//         break;
//     case `mod`:
//         console.log(`You're a mod`);
//         break;
//     case `marketer`:
//         console.log(`You're a marketer`);
//         break;
//     default:
//         console.log(`You're not allowed to login!`);
// }

// var isLoggedIn = false;

// if (isLoggedIn === true) {
//     console.log(`User is logged in`);
// } else {
//     console.log(`User need to login first!`);
// }

// var result = isLoggedIn ? `User is logged in` : `User need to login first!`;
// console.log(result);

// var PlayerOneChoice = `Rock`;
// var PlayerTwoChoice = `Paper`;

// if (PlayerOneChoice === PlayerTwoChoice) {
//     console.log(`It's a draw || tie`);
// } else if (
//     (PlayerOneChoice === `Rock` && PlayerTwoChoice === `Scissors`) ||
//     (PlayerOneChoice === `Scissors` && PlayerTwoChoice === `Paper`) ||
//     (PlayerOneChoice === `Paper` && PlayerTwoChoice === `Rock`)
// ) {
//     console.log(`Player One Wins!`);
// } else if (
//     (PlayerTwoChoice === `Rock` && PlayerOneChoice === `Scissors`) ||
//     (PlayerTwoChoice === `Scissors` && PlayerOneChoice === `Paper`) ||
//     (PlayerTwoChoice === `Paper` && PlayerOneChoice === `Rock`)
// ) {
//     console.log(`Player Two Wins!`);
// }

// if (PlayerOneChoice === PlayerTwoChoice) {
//     console.log(`It's a draw || tie`);
// } else if (
//     (PlayerOneChoice === `Rock` && PlayerTwoChoice === `Scissors`) ||
//     (PlayerOneChoice === `Scissors` && PlayerTwoChoice === `Paper`) ||
//     (PlayerOneChoice === `Paper` && PlayerTwoChoice === `Rock`)
// ) {
//     console.log(`Player One Wins!`);
// } else {
//     console.log(`Player Two Wins!`);
// }