// arrays
const fruit = ["apple", "orange", "lemon"];
const [first, ...fruits] = fruit;
console.log(first, fruits);

// objects
const person = { name: "john", lastName: "smith", job: "developer" };
const { job, ...rest } = person;
console.log(job, rest);

// functions
const testScores = [78, 90, 56, 43, 99, 45];

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name}'s average score is ${total / scores.length}.`);
};

getAverage("Jun", ...testScores);
