function solve(args) {
	let regex = /\b((?:_)[a-zA-Z0-9]+)\b/g;

	let result = args.match(regex).map(a => a.substr(1));

	console.log(result.join(','));
}

solve('The _id and _age variables are both integers.');

console.log();
solve('Calculate the _area of the _perfectRectangle object.');

console.log();
solve('__invalidVariable _evenMoreInvalidVariable_ _validVariable');