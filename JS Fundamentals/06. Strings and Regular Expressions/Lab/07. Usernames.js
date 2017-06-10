function solve(arr) {
	let usernames = arr
		.map(email => {
			let tokens = email.split('@');
			let username = tokens[0];
			let domain = tokens[1].split('.').map(a => a[0]).join('');
			return `${username}.${domain}`
		});

	console.log(usernames.join(', '));
}


solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);