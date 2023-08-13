const author = "Some Author";
const statement = "Some Statement";

// const quote = `Here is the <strong class="blue">${statement}</strong> by ${author} and it can not be more true`;
const quote = highlight`Here is the ${statement} by ${author} and it can not be more true`;
console.log(quote);

const result = document.getElementById("result");
result.innerHTML = quote;

function highlight(text, ...vars) {
  const awesomeText = text.map((item, index) => {
    return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
  });
  return awesomeText.join("");
}
