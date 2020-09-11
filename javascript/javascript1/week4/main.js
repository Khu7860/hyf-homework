let name;
const todo = [];

function getReply(command) {
  // Conditions for 'Hello my name is ' command
  if (command.includes("Hello my name is ")) {
    if (name !== command.slice(17)) {
      name = command.slice(17);
      if (name !== "") {
        return "Nice to meet you " + name;
      } else {
        return "Please Enter the name, String is empty";
      }
    } else {
      return "Please enter another name, this name already exists";
    }
  }
  //   Conditions for 'What is my name' command
  if (command.includes("What is my name")) {
    if (name !== "") {
      return "Your name is " + name;
    } else {
      return "Please Enter your name first";
    }
  }
  //   Adding element in todo
  if (command.includes("Add") && command.includes("to my todo")) {
    let element = command.slice(4, -11);
    if (element !== "" && !todo.includes(element)) {
      todo.push(element);
      return element + " Added to your todo list";
    } else {
      return "It already exist or its Empty";
    }
  }
  // removing element from todo list
  if (command.includes("Remove") && command.includes("from my todo")) {
    let element = command.slice(7, -13);
    if (element === "" && !todo.includes(element)) {
      return "Its empty or it does not exist in todo list";
    } else {
      const index = todo.indexOf(element);
      if (index > -1) {
        todo.splice(index, 1);
        return "Removed " + element + " from your todo";
      }
    }
  }

  // Check my todo list

  if (command.includes("What is on my todo?")) {
    let element = todo.toString();
    element = element.replace(/,/g, " and ");
    return element;
  }

  // checking the date for today

  if (command.includes("What day is it today?")) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Octuber",
      "November",
      "December",
    ];
    let current_datetime = new Date();
    let formatted_date =
      current_datetime.getDate() +
      ". of " +
      months[current_datetime.getMonth()] +
      " " +
      current_datetime.getFullYear();
    return formatted_date;
  }

  // doing simple math functions

  if (
    command.includes("+") ||
    command.includes("-") ||
    command.includes("/") ||
    command.includes("*")
  ) {
    const extractElements = /(?<left>[0-9]+) (?<operator>.) (?<right>[0-9]+)/;
    let match = command.match(extractElements);

    if (match[2] === "+") {
      const final = parseInt(match[1]) + parseInt(match[3]);
      return final;
    } else if (match[2] === "*") {
      const final = parseInt(match[1]) * parseInt(match[3]);
      return final;
    } else if (match[2] === "/") {
      const final = parseInt(match[1]) / parseInt(match[3]);
      return final;
    } else if (match[2] === "-") {
      const final = parseInt(match[1]) - parseInt(match[3]);
      return final;
    } else {
      return "This operator is not available";
    }
  }

  // set a timer for 4 minutes

  if (command.includes("Set a timer for 4 minutes")) {
    console.log("Timer set for 4 minutes");
    return setTimeout(message, 4000); // this can be modified to 4 minutes, right now its set for 4 seconds
    function message() {
      console.log("Timer done");
    }
  }
}

console.log(getReply("Hello my name is Ali"));
console.log(getReply("Hello my name is Ali"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add Badminton to my todo"));
console.log(getReply("Add Football to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 9 / 3"));
console.log(getReply("what is 12 * 4"));
console.log(getReply("Set a timer for 4 minutes"));
