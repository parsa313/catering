

const togler = document.querySelectorAll(".nav__togler");
const nav = document.querySelectorAll(".nav");
togler.forEach((item) =>
  item.addEventListener("click", function () {
   
    nav[0].classList.toggle('nav--expended');
  })
);