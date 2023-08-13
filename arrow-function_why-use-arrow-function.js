const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log(this);
  this.style.color = "black";
  setTimeout(() => {
    console.log(this);
  }, 2000);

  setTimeout(function () {
    console.log(this);
  }, 5000);
});
