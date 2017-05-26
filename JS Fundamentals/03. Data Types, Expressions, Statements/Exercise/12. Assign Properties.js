function assignProperties(properties) {
	let obj = {};

	for (let index = 0; index < properties.length - 1; index += 2) {
		index = Number(index);

		let property = properties[index];
		let value = properties[index + 1];
		obj[property] = value;
	}

	console.log(obj);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
