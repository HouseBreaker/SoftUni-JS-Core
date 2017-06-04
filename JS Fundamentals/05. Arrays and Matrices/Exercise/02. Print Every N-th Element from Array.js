function solve(arr) {
	let n = arr.pop();

	let everyNthElement = arr.filter((_, i) => i % n === 0);

	console.log(everyNthElement.join('\n'));
}

solve([5, 20, 31, 4, 20, 2]);

console.log();
solve(['dsa', 'asd', 'test', 'tset', 2]);

console.log();
solve([1, 2, 3, 4, 5, 6]);