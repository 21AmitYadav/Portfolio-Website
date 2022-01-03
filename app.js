const burger = document.getElementById("nav_burger_div");
const nav_items = document.getElementById("nav_items");
const nav_item = document.getElementsByClassName("nav_item");

burger.addEventListener("click", () => {
  nav_items.classList.toggle("hide");
});

for (let i = 0; i < nav_item.length; i++) {
  nav_item[i].addEventListener("click", () => {
    nav_items.classList.toggle("hide");
    console.log("clicked");
  });
}

AOS.init({
  duration: 1100,
});
