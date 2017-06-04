function solve(arr) {
	let delimiter = arr.pop();

	console.log(arr.join(delimiter));
}

solve(['One', 'Two', 'Three', 'Four', 'Five', '-']);

console.log();
solve(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);