const dropdownNavs = document.querySelectorAll(".nav-with-dropdown");
console.log(dropdownNavs);

dropdownNavs.forEach((nav) => {
  nav.addEventListener("click", toggleDropdown);
});

function toggleDropdown() {
  this.querySelector(".dropdown").classList.toggle("hidden");
  this.querySelector("img").classList.toggle("rotated");
}
