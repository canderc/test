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