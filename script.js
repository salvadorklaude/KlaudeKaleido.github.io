document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggler");
    const navBar = document.querySelector(".navbar-collapse");

    toggleButton.addEventListener("click", function () {
        navBar.classList.toggle("show");
    });
});
function toggleAdditionalInfo() {
    var additionalInfo = document.getElementById("additional-info");
    if (additionalInfo.style.display === "none") {
      additionalInfo.style.display = "block";
    } else {
      additionalInfo.style.display = "none";
    }
  }
  