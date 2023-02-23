//Exercises of Array method//
//Qno:1//
//Using splice add the element 'orange' and "lemon to the middle of the following array";
var fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(2, 0, "orange", "lemon");

document.write(fruits + "<br/>");

//Qno:2//
//Using slice create a new array containing only the elements "banana","cherry",
// "date" from the following array
var fruit = ["apple", "banana", "cherry", "date", "lemon"];
var updatedFruits = fruit.slice(1, fruit.length);
console.log("this is slice", updatedFruits);
document.write(updatedFruits + "<br/>");

//Qno:3//
//Using splice remove the element "cherry" from the following array;

var fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(2, 1);

document.write(fruits);

//Qno : 4//
//Using concat create a new array that combines the following two array
var num1 = [1, 2, 3];
var num2 = [4, 5, 6];

var result = num1.concat(num2);
console.log(result);

//Qno: 5//
//Using concat and splice create a new array that combine the following two
// array and remove the element 'cherry'
var fruits1 = ["apple", "banana", "cherry"];
var fruits2 = ["date", "strawberry", "lemom"];
var result = fruits1.concat(fruits2);
console.log(result)

result.splice(2, 1);
console.log("This is final answer ", result)

//Qno : 6//
//using an array  of number splice to remove all even numbers from the array
// and then used unshift to add '0' to the beginning of the array and "1"
// to the and of the array

var numbers = [2, 5, 7, 4, 8, 1, 6]
for (var i = numbers.length - 1; i >= 0; --i) {
    if (numbers[i] % 2 === 0) {
        numbers.splice(i, 1);
    }
}
console.log(numbers);
numbers.unshift(0);
console.log(numbers)

numbers.push(1);
console.log(numbers)

// Qno : 7 //
//using slice create a new array containning only the first two element
// of the following array

var numb = [1, 2, 3, 4, 5];
var result = numb.slice(0, 2);

document.write(result + '<br/>');

// Qno:8//
//using slice create a new array containning only the last two element
// of the following array
var numb1 = [1, 2, 3, 4, 5];
var result1 = numb1.slice(3, numb1.length);

document.write(result1 + "<br/>");

// Qno :9//
// using slice and concat create a new array containning only the element
// "banana" and "cherry" from the following array

var a = ["apple", "banana", "cherry", "date"];
var b = a.slice(1, 3);

document.write(b)

// Qno: 10//
// Given an array of string representing sentences use shift,pop,and splice
// to modify the array as follow remove the first word of the first sentences,
// remove the last word of the second sentences and replace the second word of 
// the third sentences with "awsome"

var sentences = ["the quick brown fox jumps over the lazy dog",
    "I am the warlus,coo coo ca choo", "Programming is the fun and challenging"]

//first sentences//

var splitSentence1 = sentences[0].split(' ');

splitSentence1.shift();

var joinSentence = splitSentence1.join(' ');

sentences.splice(0, 1, joinSentence);
console.log(sentences)

//second sentences//

var splitSentence2 = sentences[1].split(' ');
splitSentence2.pop();
var joinSentence1 = splitSentence2.join(' ');
sentences.splice(1, 1, joinSentence1);
console.log(sentences);

//third sentences//
var splitSentence3 = sentences[2].split(' ');
splitSentence3.splice(1,1,'awsome');
var joinSentence2 = splitSentence3.join(' ');
sentences.splice(2, 1, joinSentence2);
console.log(sentences);

//Qno:11//
// Give an array of numbers used push and splice to modify the array of the following
// add "10" to the end of the array remove the first two  numbers and then last two numbers

var numbers =[1,2,3,4,5,6,7,8,9];
var numbers2 = numbers.push(10)
console.log(numbers);

//splice remove first 2 numbers//

var numbers3=numbers.splice(0,2);
console.log(numbers)

//splice remove last 2 numbers//

var numbers4=numbers.splice(6,numbers.length);
console.log(numbers)













