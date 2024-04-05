document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", function() {
      document.body.classList.add("loading");
    });
  });

  window.addEventListener("load", function() {
    document.body.classList.remove("loading");
  });
});