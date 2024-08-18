document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const headerContent = document.querySelector(".header-content");

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    headerContent.classList.toggle("active");
  });

  const sections = document.querySelectorAll(
    ".fade-in, .slide-left, .slide-right"
  );
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

  function toggleNavLinks() {
    if (window.innerWidth <= 768) {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
      navLinks.classList.remove("active");
      headerContent.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  }

  function rearrangeFeaturesForMobile() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) {
      const featuresSection = document.querySelector(".features-section");
      const featureItems = document.querySelectorAll(".feature-item");

      if (featuresSection && featureItems.length > 0) {
        let featureImages = document.querySelector(".feature-images");

        if (!featureImages) {
          featureImages = document.createElement("div");
          featureImages.classList.add("feature-images");

          featureItems.forEach((item) => {
            const img = item.querySelector("img");
            if (img) featureImages.appendChild(img);
          });

          featuresSection.insertBefore(
            featureImages,
            featuresSection.querySelector(".features")
          );
        }
      }
    }
  }

  toggleNavLinks();
  rearrangeFeaturesForMobile();

  window.addEventListener("resize", function () {
    toggleNavLinks();
    rearrangeFeaturesForMobile();
  });
});
