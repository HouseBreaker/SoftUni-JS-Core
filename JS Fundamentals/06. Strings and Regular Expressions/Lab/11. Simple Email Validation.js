function solve(email) {
	let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/g;

	let isValid = regex.test(email);
	console.log(['Invalid', 'Valid'][(+isValid)])
}

solve('valid@email.bg');
solve('invalid@emai1.bg');
