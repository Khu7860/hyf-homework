// Age-ify (A future age calculator)

const yearOfBirth = 1990; // number type variable
let yearFuture = 2062; // number type variable
let age = yearFuture - yearOfBirth;
let futureAge = "You will be " + age + " years old in " + yearFuture;
console.log(futureAge);

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2010;
let dogYearFuture = 2021;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false; //boolean variable
console.log(
  "Your dog will be " + dogYear + " Human years old in " + dogYearFuture
);
shouldShowResultInDogYears = true;
dogYear *= 7;
console.log(
  "Your dog will be " + dogYear + " dog years old in " + dogYearFuture
);

// Housey pricey (A house price estimator)

//calculations for Peter
let wide = 8,
  deep = 10,
  high = 10,
  gardenSizeInM2 = 100,
  houseCost = 2500000;
let volumeInMeters = wide * deep * high;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let priceDiff = Math.abs(houseCost - housePrice);
console.log("Peter is Paying " + priceDiff + " more than its actual value.");
// Calculations for Julia
wide = 5;
deep = 11;
high = 8;
gardenSizeInM2 = 70;
houseCost = 1000000;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
priceDiff = Math.abs(houseCost - housePrice);
console.log("Julia is Paying " + priceDiff + " less than its actual value.");
