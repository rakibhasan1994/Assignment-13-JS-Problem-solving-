// Basic Questions related to Variables:

// 1.Question: Write a JavaScript program that takes a string variable called name and prints "Hello, [name]!" to the console. For example, if name = "John", the output should be "Hello, John!".

let name= "Rakib Hasan";
console.log("Hello "+name)


// 2.Question: Create a JavaScript program that calculates the sum of two numbers, a and b, and prints the result to the console. For example, if a = 5 and b = 10, the output should be 15.

let a=5
let b=10
console.log(a+b);

//3.Question: Declare a variable called age and assign it your age. Then, print "I am [age] years old." to the console. For example, if age = 25, the output should be "My age is 25".
let age=30
console.log("I am "+age+" years old")

//4.Question: Given 3 subjects Math, English, and Physics find the total marks and average of 3 subjects.

let math=80
let english=70
let physics=60
let totalMark=math+english+physics
console.log(totalMark)
let averageMark=totalMark/3
console.log(averageMark)

//5.Question: Create 4 variables. 2 in the camel case and 2 in the snake case. (it could be anything) make sure it’s meaning full and print all the values in the console

myName="Md Rakib Hasan"
myAge="30"
my_hobby="Cycling"
my_profession="Web Developer"
console.log("My name "+myName)
console.log("I am "+myAge+" years old")
console.log("My Hobby is "+my_hobby)
console.log("I am a "+my_profession)


// Basic Questions related to String Methods

// 1. Question: Write a program to check if a sentence has the word "Hello" using the search method.

let text="Hello i am Md Rakib Hasan";
let search = text.search("Hello");
console.log(search);

if(search === -1){
    console.log("Hello has been not found");
} else{
    console.log("Hello has been found");
}

// 2. Question: Write a JavaScript program that takes a user's name and then displays a greeting message using string concatenation. The program should ensure that any whitespace in the user's input is removed before concatenation.

let userName = prompt("Enter your name");
let concatenation = userName.concat(" Good Mornig");
console.log(concatenation.trim());

// 3. Question: Write a JavaScript program that uses template literals to create a dynamic message. The program should take the user's favorite programming language, their name, and the year they started learning it as inputs. Then, display a message that includes this information, formatted across multiple lines. (underlines should be dynamic)

let mName = "Rakib";
let mAge = 30;
let language = "Wordpress"; 
let year = 2024;
let output = `My name is ${mName}. i am ${mAge} years old.I took admission in Codeman BD for ${language} since ${year}`;
console.log(output);

// 4. Question: Write a JavaScript program that checks if a given email address belongs to Yahoo. The program should be case-insensitive and print a message indicating whether the email is a Yahoo address or not.

let email = "rakib@Yahoo.com";
let check = "yahoo.com";
let checkGmail = email.toLowerCase().includes(check.toLowerCase());

if(checkGmail===true){
console.log(email,"is a valid email");
}else{
    console.log(email,"is a invalid email");
}

// 5. Question: Write a JavaScript program that checks whether a given number is divisible by 10. The program should print a message indicating whether the number is divisible by 10 or not.

let first = 10; 
let second = 5;

if ((first % second) == 0) {
    console.log("Is divisible by 10");}else
     {
    console.log("Is not divisible by 10");
}

// 6. Question: Write a JavaScript program that checks whether a given number is even or odd. The program should print a message indicating whether the number is even or odd.

const isEven = 20;

if(isEven % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

// 7. Write a JavaScript program that checks whether a given character is a string or a number. The program should print a message indicating whether the given variable is a string or number. 

let test = "Hi i am Rakib Hasan";
console.log(typeof(test));

if (typeof test == "string") {
    console.log("Is a String");
} else {
    console.log(" Is not a string");
}