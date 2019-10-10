var faq = document.getElementsByClassName("faq_title");

for (var i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } else {
          panel.style.display = "block";
        }
  });
}

var menu = document.querySelector ('.header_nav_menu');
var menuItem = document.querySelectorAll ('.menu_item');
var hamburg = document.querySelector ('.hamburg');

hamburg.addEventListener ('click', function() {
  hamburg.classList.toggle ('hamb_active');
  menu.classList.toggle ('menu_active')
});