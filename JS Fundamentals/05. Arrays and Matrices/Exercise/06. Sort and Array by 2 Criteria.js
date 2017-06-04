function solve(arr) {
	arr.sort((a, b) => {
		let nameA = a.toUpperCase(); // ignore upper and lowercase
		let nameB = b.toUpperCase(); // ignore upper and lowercase
		if (nameA.length < nameB.length) {
			return -1;
		}
		if (nameA.length > nameB.length) {
			return 1;
		}

		if (nameA < nameB) {
			return -1;
		}

		if (nameA > nameB) {
			return 1;
		}
	});

	console.log(arr.join('\n'))
}

solve('beta alpha gamma'.split(' '));

console.log();
solve('Isacc Theodor Jack Harrison George'.split(' '));

console.log();
solve('test Deny omen Default'.split(' '));