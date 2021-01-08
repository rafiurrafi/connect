const iconBar = document.querySelector(".header__top-phone a:last-of-type");
const phoneMenu = document.querySelector(".phone-menu");
const phoneDropdown = document.querySelector(".phone-menu__dropdown");
const phoneDropdownMenu = document.querySelector(".phone-menu__dropdown-menu");
const search = document.querySelector(".header__top-phone a:first-of-type");
const searchJobs = document.querySelector(".header__top-menu .jobs");
const browseJob = document.querySelector("#browse-job");
const close = document.querySelector(".close");
const jobsButton = document.querySelector(
  ".header__top-menu .header__top-link:last-of-type"
);
console.log(jobsButton);
iconBar.addEventListener("click", function () {
  // phoneMenu.style.width = "100vw";
  // phoneMenu.style.height = "100vh";
  // phoneMenu.style.opacity = "1";
  // phoneMenu.style.visibility = "visible";
  phoneMenu.style.display = "block";
});

phoneDropdown.addEventListener("click", function () {
  if (phoneDropdownMenu.style.display == "block") {
    this.style.backgroundColor = "#1b1740";
    phoneDropdownMenu.style.display = "none";
  } else {
    this.style.backgroundColor = "#28235d";
    phoneDropdownMenu.style.display = "block";
  }
});
search.addEventListener("click", function () {
  if (searchJobs.style.opacity == 0) {
    searchJobs.style.opacity = 1;
    searchJobs.style.visibility = "visible";
  } else {
    searchJobs.style.opacity = 0;
    searchJobs.style.visibility = "hidden";
  }
});
browseJob.addEventListener("click", function () {
  phoneMenu.style.display = "none";
  if (searchJobs.style.opacity == 0) {
    searchJobs.style.opacity = 1;
    searchJobs.style.visibility = "visible";
  } else {
    searchJobs.style.opacity = 0;
    searchJobs.style.visibility = "hidden";
  }
});
close.addEventListener("click", function () {
  // phoneMenu.style.width = "0";
  // phoneMenu.style.height = "0";
  // phoneMenu.style.opacity = "0";
  // phoneMenu.style.visibility = "hidden";
  phoneMenu.style.display = "none";
});
jobsButton.addEventListener("mouseenter", function () {
  searchJobs.style.opacity = 1;
  searchJobs.style.visibility = "visible";
});
jobsButton.addEventListener("mouseleave", function () {
  searchJobs.style.opacity = 0;
  searchJobs.style.visibility = "hidden";
});
