function solve(arr) {
	let commands = {
		add: (arr, num) => arr.push(num),
		remove: arr => arr.pop()
	};

	let resultArr = [];
	let num = 1;
	for (let command of arr) {
		commands[command](resultArr, num++);
	}

	console.log(resultArr.join('\n') || 'Empty')
}

solve('add add add add'.split(' '));

console.log();
solve('add add remove add add'.split(' '));

console.log();
solve('remove remove remove'.split(' '));