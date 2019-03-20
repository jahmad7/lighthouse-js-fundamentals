var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("while loops:");
// Write a while loop that prints out the contents of ingredients:
counter = 0;
while (counter < 8){
	console.log(ingredients[counter]);
	counter++
}

console.log("\nfor loop:");
// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; i++) {
	console.log(ingredients[i]);
}

console.log("\nbackwards for loop:");
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (i = ingredients.length-1; i >= 0; i--) {
	console.log(ingredients[i]);
}