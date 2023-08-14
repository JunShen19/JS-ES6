const fruits = ["orange", "banana", "apple"];
const longName = "John Smith Pepper III";
let shortName = "";

for (const letter of longName) {
  if (letter === " ") {
    continue;
  } else {
    shortName += letter;
  }
}

// console.log(shortName);

for (const fruit of fruits) {
  if (fruit === "banana") {
    continue;
  }
  console.log(fruit);
}
