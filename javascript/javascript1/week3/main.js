// Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
names.splice(1, 1);
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function calTimeFunction() {
  return travelInformation.destinationDistance / travelInformation.speed;
}
const travelTime = calTimeFunction(travelInformation);
const hours = Math.floor(travelTime);
const minutes = Math.floor((travelTime * 60) % 60);
console.log(hours + " hours and " + minutes + " minutes");

// Series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

seriesDurations.push({
  title: "Breaking bad",
  days: 1,
  hours: 22,
  minutes: 30,
}); // changing array by adding my fav series in array

function percentageAverageLifeSpam() {
  let totalRoundedAverage;

  for (let i = 0; i < seriesDurations.length; i++) {
    let convertIntoDays =
      seriesDurations[i].days +
      seriesDurations[i].hours / 24 +
      seriesDurations[i].minutes / 60 / 24;
    let average = (convertIntoDays * 100) / (80 * 365);
    let roundedAverage = Math.round(average * 1000) / 1000;
    console.log(
      seriesDurations[i].title + " took " + roundedAverage + "% of my life"
    );
    totalRoundedAverage = roundedAverage;
    totalRoundedAverage += totalRoundedAverage;
  }

  console.log("In total that is " + totalRoundedAverage + "% of my life.");
}
percentageAverageLifeSpam();
