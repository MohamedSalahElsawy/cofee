/*scroll*/
let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    nav.classList.add("active_nav");
  } else {
    nav.classList.remove("active_nav");
  }
});

/*list*/
let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
let header = document.querySelector("header");
let ul = document.querySelector("ul");

btn.addEventListener("click", (e) => {
  header.classList = "btn";
});
btn2.addEventListener("click", (e) => {
  header.classList.remove("btn");
});

/*num*/
let nums = document.querySelectorAll(".num1 .count");
let sec = document.querySelector(".num");
let start = false;
window.onscroll = function () {
  if (window.scrollY >= sec.offsetTop) {
      
      if (!start) {
          nums.forEach((num) => element(num));
      }
      start = true;
  }
};
function element(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 250/goal);
}



