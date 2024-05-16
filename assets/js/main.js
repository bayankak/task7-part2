// part1
// First exercise
window.alert("first exercise:This exercise will return the largest and smallest number out of the three numbers you enter")
let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));
let minNum = Math.min(num1, num2, num3);
let maxNum = Math.max(num1, num2, num3);
console.log("min element: " + minNum);
console.log("max element: " + maxNum);
console.log("======================================================================");


// The second exercise
window.alert("second exercise:This exercise displays the character entered and prints whether it is a vowel or not")

let character = prompt("Enter a character:").toLowerCase();
if (character.length === 1 && /[a-z]/.test(character)) {
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
        console.log(character + " is a vowel.");
    } else {
        console.log(character + " is a consonant.");
    }
} else {
    console.log("Please enter a single alphabet character.");
}
console.log("======================================================================");


// Third exercise
window.alert("Third exercise:This exercise will print the multiplication table from 1 to 12 for the entered number")

let num = parseInt(prompt("Enter the number to display the product of multiplying it by numbers from 1 to 12 :"));

for (let i = 1; i <= 12; i++) {
    let result = num * i;
    console.log(result);
}
console.log("======================================================================");


// Fourth exercise
window.alert("Fourth exercise:This exercise will print even numbers between 1 and the entered number")


let number = parseInt(prompt("Enter number:"));

for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("======================================================================");


// Fifth exercise
window.alert("Fifth exercise:This exercise will return the calculate total, average, and percentage of five input subjects")
let numbers = [];
let sum = 0;
for (let i = 1; i <= 5; i++) {
    let num = parseFloat(prompt("Enter Marks of five subjects:" + i));
    numbers.push(num);
    sum += num;
}
console.log("Total marks:  " + sum);
let average = sum / numbers.length;
console.log("Average Marks:  " + average);
console.log("Percentage:"+ average  + "%");
console.log("======================================================================");


//Sixth exercise
window.alert("Sixth exercise:This exercise will print a student's final grade point average in five input subjects")
let physics = parseFloat(prompt("Enter marks for Physics:"));
let chemistry = parseFloat(prompt("Enter marks for Chemistry:"));
let biology = parseFloat(prompt("Enter marks for Biology:"));
let mathematics = parseFloat(prompt("Enter marks for Mathematics:"));
let computer = parseFloat(prompt("Enter marks for Computer:"));

let totalMarks = physics + chemistry + biology + mathematics + computer;
let percentage = (totalMarks / 5);

let grade;

if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else if (percentage >= 40) {
    grade = 'E';
} else {
    grade = 'F';
}

console.log("Grade: " +grade);
console.log("======================================================================");

// part2


