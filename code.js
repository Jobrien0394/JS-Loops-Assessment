// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

let numbers = [
  469,
  755,
  244,
  245,
  758,
  450,
  302,
  20,
  712,
  71,
  456,
  21,
  398,
  339,
  882,
  848,
  179,
  535,
  940,
  472,
];

document.write("<h1>Array Analyzer</h1>")
document.write("<h3>Now analyzing the array: " + numbers + "</h3>");
document.write("<ul>");
// Write your code here 👇

let largestNumber = 0;
let smallestNumber = numbers[0];
let sum = 0;
let avgNum = 0;
let evenNumbers = [];
let oddNumbers = [];
let divByEight = [];

for (let index = 0; index < numbers.length; index += 1) {
  
  if (numbers[index] > largestNumber) {
    largestNumber = numbers[index]; }

    if (numbers[index] < smallestNumber) {
      smallestNumber = numbers[index] }

      sum += numbers[index]
      
      avgNum = sum / numbers.length;

      if (numbers[index] % 2 === 0) {
      evenNumbers.push(numbers[index]);
      }
      if (numbers[index] % 2 !== 0) {
        oddNumbers.push(numbers[index]);
      }
      if (numbers[index] % 8 === 0) {
        divByEight.push(numbers[index]);
      }
  }

// Then render each li:
document.write("<li>Largest Number: " + largestNumber + "</li>");
document.write("<li>Smallest Number: " + smallestNumber + "</li>");
document.write("<li>The Sum is: " + sum + "</li>");
document.write("<li>The Average is: " + avgNum + "</li>");
document.write("<li>The Even Numbers are: " + evenNumbers + "</li>");
document.write("<li>The Odd Numbers are: " +oddNumbers + "</li>");
document.write("<li> Numbers Divisible by 8 are: " +divByEight + "</li>");
// etc...


document.write("</ul>");
