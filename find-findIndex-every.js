// find
const people = [
  {
    id: 1,
    name: "jun",
  },
  { id: 2, name: "amy" },
  { id: 3, name: "anna" },
];

const anna = people.find((person) => person.name == "anna");
console.log(anna);

// findIndex
const person = people.findIndex((item) => item.id == 1);
console.log(person);

// every, some
const grades = ["A", "B", "C"];
const goodGrades = ["A", "A", "B"];
const allGoodGrades = goodGrades.every((grade) => grade !== "C");
console.log("allGoodGrades: ", allGoodGrades);
const oneBadGrade = grades.some((grade) => grade == "C");
console.log("oneBadGrade: ", oneBadGrade);
