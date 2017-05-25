function calculateMoviePrice([movieName, day]) {
	movieName = movieName.toLowerCase();
	day = day.toLowerCase();

	let movies = {
		'the godfather': {
			'monday': 12,
			'tuesday': 10,
			'wednesday': 15,
			'thursday': 12.50,
			'friday': 15,
			'saturday': 25,
			'sunday': 30
		},
		'schindler\'s list': {
			'monday': (weekdayPrice = 8.50),
			'tuesday': weekdayPrice,
			'wednesday': weekdayPrice,
			'thursday': weekdayPrice,
			'friday': weekdayPrice,
			'saturday': (weekendPrice = 15),
			'sunday': weekendPrice
		},
		'casablanca': {
			'monday': (weekdayPrice = 8),
			'tuesday': weekdayPrice,
			'wednesday': weekdayPrice,
			'thursday': weekdayPrice,
			'friday': weekdayPrice,
			'saturday': (weekendPrice = 10),
			'sunday': weekendPrice
		},
		'the wizard of oz': {
			'monday': (weekdayPrice = 10),
			'tuesday': weekdayPrice,
			'wednesday': weekdayPrice,
			'thursday': weekdayPrice,
			'friday': weekdayPrice,
			'saturday': (weekendPrice = 15),
			'sunday': weekendPrice
		},
	};

	if (movies[movieName] && movies[movieName][day]) {
		console.log(movies[movieName][day])
	} else {
		console.log('error')
	}
}

calculateMoviePrice(['The Godfather', 'Friday']);
calculateMoviePrice(['casablanca', 'sunday']);
calculateMoviePrice(['Schindler\'s LIST', 'monday']);
calculateMoviePrice(['SoftUni', 'Nineday']);