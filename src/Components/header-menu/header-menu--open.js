

let switchHeader = document.querySelector(".switch-header");

switchHeader.addEventListener("click", () => {
  if (switchHeader.classList == "switch-header--open") {
    switchHeader.nextElementSibling.classList.add("header-menu--open"); 
    switchHeader.classList.add("switch-header--open");
  } else {
    switchHeader.nextElementSibling.classList.remove("header-menu--open"); 
    switchHeader.classList.remove("switch-header--open");
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
