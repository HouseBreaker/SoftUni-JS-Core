function solve(word) {
	for (let char in word) {
		console.log(`str[${char}] -> ${word[char]}`);
	}
}

solve('Hello, World!');

console.log();
solve('SoftUni');