function range (start, end, step) {
	var result = []

	if (start < end && start != undefined && end != undefined && step != undefined && step > 0){
		for (i = start; i <= end; i = i + step ) {
			result.push(i);
		}
	}

	return result;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));