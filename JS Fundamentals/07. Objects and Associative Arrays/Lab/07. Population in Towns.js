function solve(arr) {
	let cities = arr.map(str => {
		let tokens = str.split(' <-> ');

		return {
			name: tokens[0],
			population: (+tokens[1])
		};
	});

	let citiesPopulation = new Map();
	cities.forEach(city => {
		let [name, population] = [city.name, city.population];

		citiesPopulation.has(name) ?
			citiesPopulation.set(name, citiesPopulation.get(name) + population) :
			citiesPopulation.set(name, population);
	});

	citiesPopulation.forEach((population, name) => {
		console.log(`${name} : ${population}`);
	})
}

solve([
	'Varna <-> 40000',
	'Sofia <-> 1200000',
	'Plovdiv <-> 20000',
	'Sofia <-> 100000',
	'Varna <-> 420000',
	'Plovdiv <-> 400000',
	'Plovdiv <-> 50000'
]);
