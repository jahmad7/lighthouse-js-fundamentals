function howManyHundreds(num) {
  sub = num%100;
  return (num - sub)/100;
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(99));