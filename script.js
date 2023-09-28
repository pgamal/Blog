const toggleButton = document.getElementsByClassName("Nav-bar-toggle")[0];
const navbarLinks = document.getElementsByClassName("Nav-bar-Links");
toggleButton.addEventListener("click", function () {
  for (var i = 0; i < navbarLinks.length; i++)
    navbarLinks[i].classList.toggle("active");
});
