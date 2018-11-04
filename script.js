// Zadanie pierwsze

console.log('--> Zadanie 1');

const string1 = 'Hello';
const string2 = 'world';
const addStrings = (`${string1} ${string2}`);

console.log(addStrings);



// --------------------------------------------------------------------------------------------------------------
// Zadanie drugie

console.log('--> Zadanie 2');

const multiply = (number1 = 1, number2 = 1) => number1 * number2;
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));



// --------------------------------------------------------------------------------------------------------------
// Zadanie trzecie

console.log('--> Zadanie 3');

const average = (...args) => {
	let sum = 0;
	args.forEach(arg => {
		sum += arg;
	});
	return (`Średnia liczb wynosi: ${sum / args.length}`);
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));
console.log(average(7, 7, 7, 7));




// --------------------------------------------------------------------------------------------------------------
// Zadanie czwarte
console.log('--> Zadanie 4');

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);


// --------------------------------------------------------------------------------------------------------------
// Zadanie piąte

console.log('--> Zadanie 5');

const tablica = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstName, , lastName] = tablica;

console.log(`The frist name is: ${firstName}`);
console.log(`The last name is: ${lastName}`);
