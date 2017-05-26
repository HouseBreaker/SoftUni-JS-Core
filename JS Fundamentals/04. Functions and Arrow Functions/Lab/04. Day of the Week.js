function getDayOfWeek(day) {
	let days = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split(' ');

	let dayIndex = days.indexOf(day);
	return dayIndex !== -1 ? dayIndex + 1 : 'error';
}

console.log(getDayOfWeek('Monday'));

console.log();
console.log(getDayOfWeek('Friday'));

console.log();
console.log(getDayOfWeek('Frabjoyousday'));