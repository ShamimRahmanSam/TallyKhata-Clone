document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in");
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  window.playVideo = function () {
    const video = document.getElementById("promoVideo");
    const thumbnail = document.querySelector(".videoThumbnail");

    thumbnail.style.display = "none";
    video.style.display = "block";

    video.play();
  };

  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((item) => {
    item.addEventListener("click", function () {
      alert(`You clicked on ${this.querySelector("p").innerText}`);
    });
  });
});
