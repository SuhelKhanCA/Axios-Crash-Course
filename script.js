document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("bright-mode");
  document.getElementById("res").classList.toggle("dark-mode");
  document.getElementById("res").classList.toggle("bright-mode");
});
