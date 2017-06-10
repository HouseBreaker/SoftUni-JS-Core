function solve(arr) {
	let regex =
		/^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z\d- ]+)$/;

	let employees = [];

	for (let line of arr) {
		if (regex.test(line)) {
			let match = regex.exec(line);

			let name = match[1];
			let salary = (+match[2]);
			let position = match[3];

			employees.push({
				name: name,
				salary: salary,
				position: position
			});
		}
	}

	let output = employees.map(e =>
		`Name: ${e.name}\nPosition: ${e.position}\nSalary: ${e.salary} `
	).join('\n');

	console.log(output);
}

solve(['Isacc - 1000 - CEO',
	'Ivan - 500 - Employee',
	'Peter - 500 - Employee',
]);

console.log();
solve([
	'Jonathan - 2000 - Manager',
	'Peter- 1000- Chuck',
	'George - 1000 - Team Leader',
]);
