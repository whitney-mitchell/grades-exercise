// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

// scores = scores.sort(function(previous ,next) {
// return previous - next;
// });
// ^^^^^^^^What this does is run the `.sort` method on your array, with a twist.
// The first two numbers from the array are passed into the anonymous function, which returns either
// a positive number , a negative number, or zero. If it's negative, we know the first number is smaller,
// if it's positive, we know the second number is smaller, and if it's 0, we know the numbers are the same.
// Then the sort function can arrange the two numbers in the proper order. It repeats this action on the
// second and third #s, third and fourth, etc.


// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// scores = scores.sort(function (a, b) {
// 	return a - b
// });
// console.log("scores in order", scores)

// var grade = {
// 	totalA: [],
// 	totalB: [],
// 	totalC: [],
// 	totalD: [],
// 	totalF: []
// };

// var totalA = [];
// var totalB = [];
// var totalC = [];
// var totalD = [];
// var totalF = [];

// for (var i = 0; scores[i] > 70 && scores[i] <=80; i++) {
// 	console.log("Grade of C", scores[i]);
// 	grade['totalC'].push(scores[i]);
// }

// for (var i = 0; scores[i] > 60 && scores[i] <=70; i++) {
// 	console.log("Grade of D", scores[i]);
// 	grade['totalD'].push(scores[i]);
// }

// for (var i = 0; scores[i] <= 60; i++) {
// 	console.log("Grade of F", scores[i]);
// 	grade['totalF'].push(scores[i]);
// }

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

scores = scores.sort(function (a, b) {
	return a - b
});
console.log("scores in order", scores)

var grade = {
	totalA: [],
	totalB: [],
	totalC: [],
	totalD: [],
	totalF: []
};

for (var i = 0; i < scores.length; i++) {
	if (scores[i] >= 91) {
		grade['totalA'].push(scores[i]);
	} else if (scores[i]>80 && scores[i]<=90) {
		grade['totalB'].push(scores[i]);
	} else if (scores[i]>70 && scores[i]<=80) {
		grade['totalC'].push(scores[i]);
	} else if (scores[i]>60 && scores[i]<=70) {
		grade['totalD'].push(scores[i]);
	} else if (scores[i]<=60) {
		grade['totalF'].push(scores[i]);
	}
};

console.log("Totals of each grade:");
console.log("A", grade.totalA.length);
console.log("B", grade.totalB.length);
console.log("C", grade.totalC.length);
console.log("D", grade.totalD.length);
console.log("F", grade.totalF.length);

var min = Math.min(...scores);
var max = Math.max(...scores);
console.log("The lowest score is " + min);
console.log("The highest score is " + max);






