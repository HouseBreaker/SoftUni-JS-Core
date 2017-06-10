function solve(text, delimiter) {
	let result = text.split(delimiter).join('\n');
	console.log(result);
}

solve('One-Two-Three-Four-Five', '-');

console.log();
solve('http://platform.softuni.bg', '.');