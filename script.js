

// this is the burger button
var burgerBtn = document.getElementById("burger");

// This is the navbar to show and hide
var nav = document.getElementById("nav");

// when your click the burger button, you add the active class to the navbar
burgerBtn.addEventListener("click", function () {
  console.log("You clicked the button")

  // adding or delete the class active
  nav.classList.toggle("active");
});

