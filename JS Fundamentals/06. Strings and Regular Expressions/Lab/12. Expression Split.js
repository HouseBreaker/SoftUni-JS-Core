function solve(str) {
	let regex = /[ (),;.]+/;

	let members = str.split(regex).filter(a => a !== '');
	console.log(members.join('\n'))
}

solve('let sum = 4 * 4,b = "wow";');
