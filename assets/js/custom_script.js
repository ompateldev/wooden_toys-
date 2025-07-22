// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  const btn = document.getElementById("backToTopBtn");

  // Check if the element exists
  if (!btn) {
    console.warn("Element with ID 'backToTopBtn' not found.");
    return;
  }

  // Show button when scroll down 100px
  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Smooth scroll to top on click
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
