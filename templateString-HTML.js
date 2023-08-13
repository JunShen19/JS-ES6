const person = {
  name: "john",
  job: "SE",
  hobbies: ["dance", "draw", "hangout"],
};

const result = document.getElementById("result");

result.innerHTML = `<h2>${person.name}</h2><p>${
  person.job
}</p><ul>${person.hobbies
  .map((item) => {
    return `<li>${item}</li>`;
  })
  .join("")}</ul>`;
