// of: create an Array by arguments
const friends = Array.of("john", 2, true);
console.log(friends);

// from:
const udemy = "udemy";
console.log(Array.from(udemy));

function countTotal() {
  let total = Array.from(arguments).reduce(
    (total, currNum) => (total += currNum),
    0
  );
  console.log(total);
}

countTotal(55, 78, 12, 70);

// DOM Elements(NodeList)
const p = document.querySelectorAll("p");

const text = Array.from(p, (item) => {
  return `<span>${item.textContent}</span>`;
});

console.log(text);

//
