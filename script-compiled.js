'use strict';

// Zadanie pierwsze

console.log('--> Zadanie 1');

var string1 = 'Hello';
var string2 = 'world';
var addStrings = string1 + ' ' + string2;

console.log(addStrings);

// --------------------------------------------------------------------------------------------------------------
// Zadanie drugie

console.log('--> Zadanie 2');

var multiply = function multiply() {
	var number1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var number2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return number1 * number2;
};
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

// --------------------------------------------------------------------------------------------------------------
// Zadanie trzecie

console.log('--> Zadanie 3');

var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	args.forEach(function (arg) {
		sum += arg;
	});
	return '\u015Arednia liczb wynosi: ' + sum / args.length;
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));
console.log(average(7, 7, 7, 7));

// --------------------------------------------------------------------------------------------------------------
// Zadanie czwarte
console.log('--> Zadanie 4');

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average.apply(undefined, grades);

// --------------------------------------------------------------------------------------------------------------
// Zadanie piąte

console.log('--> Zadanie 5');

var tablica = [1, 4, 'Iwona', false, 'Nowak'];

var firstName = tablica[2],
    lastName = tablica[4];


console.log('The frist name is: ' + firstName);
console.log('The last name is: ' + lastName);
