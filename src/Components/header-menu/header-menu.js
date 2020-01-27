let switchHeader = document.querySelector(".switch-header");
let switchOpen = "switch-header--open";
let menuOpen = "header-menu--open";

switchHeader.addEventListener("click", () => {
  if (!switchHeader.classList.contains(switchOpen)) {
    switchHeader.nextElementSibling.classList.add(menuOpen); 
    switchHeader.classList.add(switchOpen);
  } else {
    switchHeader.nextElementSibling.classList.remove(menuOpen); 
    switchHeader.classList.remove(switchOpen);
  }
});

/*$(document).ready(() => {
      $(".switch-header").click( function() {
        if (!($(this).hasClass("switch-header--open"))) {
          $(this).siblings(".header-menu").addClass("header-menu--open");
          $(this).addClass("switch-header--open");
        } else {
          $(this).siblings(".header-menu").removeClass("header-menu--open");
          $(this).removeClass("switch-header--open");
        }
      })
    })*/
