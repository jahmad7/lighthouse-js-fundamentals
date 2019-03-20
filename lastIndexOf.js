function lastIndexOf (array, value) {
	for (var i = array.length-1; i >= 0; i--) {
		if (array[i] === value) {
			return console.log(i);
			break;
		}
	}
	return console.log(-1);
}

lastIndexOf([ 0, 1, 4, 1, 2 ], 1);
lastIndexOf([ 0, 1, 4, 1, 2 ], 2);
lastIndexOf([ 0, 1, 4, 1, 2 ], 3);
lastIndexOf([ 5, 5, 5 ], 5);
lastIndexOf([], 3);