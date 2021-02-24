// Select
var hamburger = document.querySelector(".mobile-icon");
var menu = document.querySelector(".mobile-menu");
var menuClose = document.querySelector(".mobile-close-icon")

// Manipulate
hamburger.addEventListener("click", function(){
    menu.classList.toggle("mobile-menu-toggle");
})

menuClose.addEventListener("click", function(){
    menu.classList.toggle("mobile-menu-toggle");
})