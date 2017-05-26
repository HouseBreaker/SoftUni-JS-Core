function getLastMonth([day, month, year]) {
	let date = new Date(year, month - 1, 0);

	console.log(date.getDate());
}

getLastMonth([17, 3, 2002]);
