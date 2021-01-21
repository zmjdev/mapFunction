const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = numbers.map((number) => number + 1);
console.log(newArray);

function addOne(number) {
	return number + 1;
}

function map(array, instruction) {
	const output = [];
	for (let i = 0; i < array.length; i++) {
		output.push(instruction(array[1]));
	}
	return output;
}
