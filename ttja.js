// Smooth scroll effect for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  for (const link of navLinks) {
    link.addEventListener("click", smoothScroll);
  }
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// Read More functionality for blog posts
document.addEventListener("DOMContentLoaded", function () {
  const readMoreLinks = document.querySelectorAll(".read-more");

  for (const link of readMoreLinks) {
    link.addEventListener("click", togglePostVisibility);
  }
});

function togglePostVisibility(event) {
  event.preventDefault();
  const fullPost = event.target.nextElementSibling;

  if (fullPost.style.display === "none") {
    fullPost.style.display = "block";
    event.target.textContent = "Read Less";
  } else {
    fullPost.style.display = "none";
    event.target.textContent = "Read More";
  }
}