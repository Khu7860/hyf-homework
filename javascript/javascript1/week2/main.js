// Flight booking fullname function

console.log(getFullName("khuram", "Ejaz", true));
console.log(getFullName("john", "smith"));

function getFullName(firstName1, lastName1, useFormalName) {
  if (useFormalName == true && firstName1 !== "" && lastName1 !== "") {
    return "Lord " + firstName1 + " " + lastName1;
  } else if (
    useFormalName == false &&
    firstName1 !== null &&
    lastName1 !== null
  ) {
    return firstName1 + " " + lastName1;
  } else if (
    useFormalName == null &&
    firstName1 !== null &&
    lastName1 !== null
  ) {
    return firstName1 + " " + lastName1;
  } else {
    console.log("Please enter the first name and last name");
  }
}

// Event application

function getEventWeekDay(x) {
  let d = new Date();
  let day = (d.getDay() + x) % 7;
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let todaysDay = days[day];
  console.log(todaysDay);
}
getEventWeekDay(9);

// Weather wear

function clothsFinder(temp) {
  if (temp > 55) {
    return "Impossible! Are you inside a Volcano?? :O";
  } else if (temp < -30) {
    return 'If you are in antartica then i can"t suggess you any cloths. Best of luck';
  } else if (-29 < temp && temp < 0) {
    return "Extremely cold, big heavy jakect, full sleev shirt or sweater, and jeans pant with winter underwears.";
  } else if (15 > temp && temp > 0) {
    return "Please wear winter cloths, try a winter jacket, t-shirt and full sized pant";
  } else if (25 > temp && temp > 16) {
    return "full sleev shirts and pant would be great";
  } else if (35 > temp && temp > 26) {
    return "Its hot today, just t-shirt and shorts";
  } else if (55 > temp && temp > 36) {
    return "Too hot!!! stay in shade and drink lots of water. forget about cloths";
  } else {
    return "Please enter Real value";
  }
}

const clothesToWear = clothsFinder(44);
console.log(clothesToWear);

// Student manager

const class07Students = [];
addStudentToClass("khuram");
addStudentToClass("Daniel");
addStudentToClass("John");
addStudentToClass("Ali");
addStudentToClass("Ali");
addStudentToClass("holla");
addStudentToClass("Surri");
addStudentToClass("");

function addStudentToClass(studentName) {
  // You write code here

  if (class07Students.includes(studentName)) {
    return "Student" + studentName + "is already exist in the class";
  } else if (class07Students.length > 6) {
    return "Cannot add more students to class 07";
  } else if (studentName === "") {
    return "You can't add empty name, Add some real name";
  } else if (studentName == "Margrethe") {
    return class07Students.push(studentName);
  } else {
    return class07Students.push(studentName);
  }
}

console.log(class07Students);
getNumberOfStudents();
function getNumberOfStudents() {
  // You write code here
  console.log("There are " + class07Students.length + " in the class 07");
}
