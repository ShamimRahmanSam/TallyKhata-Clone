document.addEventListener("DOMContentLoaded", function () {
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
        observer.unobserve(entry.target); // Optional: Uncomment if you want to observe only once
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
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.querySelector(".menu-toggle");

    if (window.innerWidth <= 768) {
      // Remove nav links from the DOM on mobile devices
      if (navLinks) {
        navLinks.remove();
      }
    } else {
      // Re-add nav links to the DOM on larger screens
      if (!document.querySelector(".nav-links")) {
        const header = document.querySelector("header .custom-header");
        const navHtml = `
        <nav class="nav-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li class="dropdown">
              <a href="#">Services</a>
              <ul class="dropdown-content">
                <li><a href="#"><img src="flag1.png" alt="Flag 1"> Bangla 1</a></li>
                <li><a href="#"><img src="flag2.png" alt="Flag 2"> Bangla 2</a></li>
              </ul>
            </li>
            <!-- Add more nav items as needed -->
          </ul>
        </nav>
      `;
        header.insertAdjacentHTML("beforeend", navHtml);
      }
    }
  }

  // Initial call
  toggleNavLinks();

  // Add event listener for window resize
  window.addEventListener("resize", toggleNavLinks);

  // Add event listener for menu toggle button
  document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
  });

  window.addEventListener("load", function () {
    function rearrangeFeaturesForMobile() {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 480) {
        const featuresSection = document.querySelector(".features-section");
        const featureItems = document.querySelectorAll(".feature-item");
        const featureImages = document.createElement("div");
        featureImages.classList.add("feature-images");

        // Remove images from their original location and append them to the new container
        featureItems.forEach((item) => {
          const img = item.querySelector("img");
          featureImages.appendChild(img);
        });

        // Insert the image container at the top of the feature section
        featuresSection.insertBefore(
          featureImages,
          featuresSection.querySelector(".features")
        );
      }
    }

    rearrangeFeaturesForMobile(); // Call on load
    window.addEventListener("resize", rearrangeFeaturesForMobile); // Call on resize
  });
});
