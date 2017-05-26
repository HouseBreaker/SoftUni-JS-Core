function calculate(a, b, operator) {
	let functions = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'*': (a, b) => a * b,
		'/': (a, b) => a / b,
	};

	return functions[operator](a, b);
}

console.log(calculate(1, 2, '+'));
console.log(calculate(3, 3, '/'));
console.log(calculate(18, -1, '*'));