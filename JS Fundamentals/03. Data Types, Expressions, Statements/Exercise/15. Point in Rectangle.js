function pointInRectangle([x, y, x0, x1, y0, y1]) {
	let isInsideX = x >= x0 && x <= x1;
	let isInsideY = y >= y0 && y <= y1;

	if (isInsideX && isInsideY) {
		console.log('inside');
	} else {
		console.log('outside');
	}
}

pointInRectangle([8, -1, 2, 12, -3, 3]);
