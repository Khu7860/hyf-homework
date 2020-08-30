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
  let totalRoundedAverage = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    let convertIntoDays =
      seriesDurations[i].days +
      seriesDurations[i].hours / 24 +
      seriesDurations[i].minutes / 60 / 24;
    let average = (convertIntoDays * 100) / (80 * 365); // formula for average of 80 years
    let roundedAverage = Math.round(average * 1000) / 1000; // rounding off upto 3 decimal
    console.log(
      seriesDurations[i].title + " took " + roundedAverage + "% of my life"
    );
    totalRoundedAverage += roundedAverage;
  }

  console.log("In total that is " + totalRoundedAverage + "% of my life.");
}
percentageAverageLifeSpam();

/// NOnoN0nOYes (Note taking app) ///

// Save a note

const notes = [];

function saveNote(content, id) {
  // write some code here
  notes.push({ content, id });
  return notes;
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

//  Get a note

function getNote(id) {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    if (isNaN(id)) {
      return "String is empty or id is not a number";
    } else {
      var result = notes.filter((obj) => {
        return obj.id === id;
      });
      return result;
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// Log out notes

function logOutNotesFormatted() {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i].id +
        ", has the following note text: " +
        notes[i].content
    );
  }
}

logOutNotesFormatted();
