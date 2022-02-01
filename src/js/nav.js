"use-strict";

document.addEventListener("click", (e) => {
  const navbarCollapseIcon = e.target.closest(".navbar-collapse__icon");
  const navbarCollapseList = e.target.closest(".navbar-collapse__list");

  if (!navbarCollapseList && !navbarCollapseIcon) {
    document
      .querySelector(".navbar-collapse__list")
      .classList.remove("navbar-collapse__list--show");
  }
});

document
  .querySelector(".navbar-collapse__icon")
  .addEventListener("click", (e) => {
    const navbarCollapseList = document.querySelector(".navbar-collapse__list");

    navbarCollapseList.classList.toggle("navbar-collapse__list--show");
  });
