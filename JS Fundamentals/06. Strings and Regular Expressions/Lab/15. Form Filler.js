function solve(username, email, phone, lines) {
	let pattern = '<X[a-zA-Z]+X>';

	let regexps = {
		username: new RegExp(pattern.replace(/X/g, '!'), 'g'),
		email: new RegExp(pattern.replace(/X/g, '@'), 'g'),
		phone: new RegExp(pattern.replace(/X/g, '\\+'), 'g'),
	};

	for (let i in lines) {
		let replaced = lines[i]
			.replace(regexps.username, username)
			.replace(regexps.email, email)
			.replace(regexps.phone, phone);

		lines[i] = replaced;

		console.log(lines[i]);
	}
}

solve('Pesho',
	'pesho@softuni.bg',
	'90-60-90',
	[
		'Hello, <!username!>!',
		'Welcome to your Personal profile.',
		'Here you can modify your profile freely.',
		'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
		'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
		'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);

console.log();
solve([
	'Jonathan - 2000 - Manager',
	'Peter- 1000- Chuck',
	'George - 1000 - Team Leader',
]);
