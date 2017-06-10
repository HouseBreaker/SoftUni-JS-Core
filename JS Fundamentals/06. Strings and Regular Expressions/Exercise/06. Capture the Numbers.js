function solve(args) {
	let regex = /\d+/g;

	let result = args.join(' ').match(regex);

	console.log(result.join(' '));
}

solve([
	'The300',
	'What is that?',
	'I think it’s the 3rd movie.',
	'Lets watch it at 22:45'
]);

console.log();
solve([
	'123a456',
	'789b987',
	'654c321',
	'0'
]);