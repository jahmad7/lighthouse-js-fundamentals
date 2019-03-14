function ageCalculator(name, yearOfBirth, currentYear=2019) {
  return `${name} is ${currentYear-yearOfBirth} years old.`;
}

console.log(ageCalculator("Miranda",1983,2015));
console.log(ageCalculator("Ferdinand",1988,2015));
console.log(ageCalculator("James",1994));