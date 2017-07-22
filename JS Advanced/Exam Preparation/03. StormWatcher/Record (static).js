class Record {
	constructor(temperature, humidity, pressure, windSpeed) {
		this.id = Record.getId();
		this.temperature = temperature;
		this.humidity = humidity;
		this.pressure = pressure;
		this.windSpeed = windSpeed;
	}

	static getId() {
		if (!this.id) {
			this.id = 0;
		}

		return this.id++;
	}

	get weather() {
		let hasCorrectTemperature = this.temperature < 20;
		let hasCorrectPressure = this.pressure < 700 || this.pressure > 900;
		let hasCorrectWindSpeed = this.windSpeed > 25;
		let isStormy = hasCorrectTemperature && hasCorrectPressure && hasCorrectWindSpeed;

		if (isStormy) {
			return 'Stormy';
		}

		return 'Not stormy';
	}

	toString() {
		let result = `Reading ID: ${this.id}\n`;
		result += `Temperature: ${this.temperature}*C\n`;
		result += `Relative Humidity: ${this.humidity}%\n`;
		result += `Pressure: ${this.pressure}hpa\n`;
		result += `Wind Speed: ${this.windSpeed}m/s\n`;
		result += `Weather: ${this.weather}`;

		return result;
	}
}

module.exports = Record;