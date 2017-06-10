function solve(text, endsWithText) {
	String.prototype.capitalize = function () {
		return this[0].toUpperCase() + this.substr(1).toLowerCase();
	};

	let result = text.split(' ').map(a => a.capitalize()).join(' ');
	console.log(result);
}

solve('Capitalize these words');

console.log();
solve('Was that Easy? tRY thIs onE for SiZe!');