document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer for fade-in effect
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

  // Video playback on click
  window.playVideo = function () {
    const video = document.getElementById("promoVideo");
    const thumbnail = document.querySelector(".videoThumbnail");

    // Hide the thumbnail and show the video
    thumbnail.style.display = "none";
    video.style.display = "block";

    // Start playing the video
    video.play();
  };

  // Grid item click event
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach((item) => {
    item.addEventListener("click", function () {
      alert(`You clicked on ${this.querySelector("p").innerText}`);
    });
  });
});
