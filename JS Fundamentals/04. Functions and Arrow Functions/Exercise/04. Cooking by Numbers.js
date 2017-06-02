function solve(args) {
	let num = Number(args[0]);

	let commands = {
		chop: num => num / 2,
		dice: num => Math.sqrt(num),
		spice: num => num + 1,
		bake: num => num * 3,
		fillet: num => num * 0.8
	};

	let argsCommands = args.slice(1);

	for (let command of argsCommands) {
		num = commands[command](num);
		console.log(num);
	}
}

solve([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
