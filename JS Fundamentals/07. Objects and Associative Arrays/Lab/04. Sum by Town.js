function solve(arr) {
	let towns = arr.filter((item, index) => index % 2 === 0);
	let sums = arr.filter((item, index) => index % 2 === 1);

	let townSums = {};

	towns.forEach((key, i) => {
		let [townSum, sum] = [townSums[key], Number(sums[i])];
		townSums[key] = townSum ? townSum + sum : sum;
	});

	console.log(JSON.stringify(townSums));
}

solve(['Sofia', 20, 'Varna', 3, 'Sofia', 5, 'Varna', 4]);