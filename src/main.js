document.addEventListener("DOMContentLoaded", () => {
  // Burger Menu Functionality
  const burgerMenu = document.querySelector(".burger-menu");
  const menuLinks = document.querySelector(".hyperlinks");
  const links = document.querySelectorAll(".hyperlinks a");

  burgerMenu.addEventListener("click", () => {
    menuLinks.classList.toggle("show"); 
    burgerMenu.classList.toggle("open"); 
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menuLinks.classList.remove("show"); 
      burgerMenu.classList.remove("open"); 
    });
  });

  // FAQ Carousel Functionality
  const carousel = document.querySelector(".faq-carousel");
  const cards = document.querySelectorAll(".faq-card");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let currentIndex = 0; 

  const updateCarousel = () => {
    const cardWidth = cards[0].offsetWidth + 20; 
    const offset = (carousel.parentElement.offsetWidth - cardWidth) / 2; 
    carousel.style.transform = `translateX(calc(-${currentIndex * cardWidth}px + ${offset}px))`;

    cards.forEach((card, index) => {
      if (index === currentIndex) {
        card.classList.add("center");
        card.style.opacity = "1"; 
        card.style.transform = "scale(1.1)"; 
      } else {
        card.classList.remove("center");
        card.style.opacity = "0.5"; // 
        card.style.transform = "scale(1)"; // 
      }
    });
  };

  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--; 
    } else {
      currentIndex = cards.length - 1; 
    }
    updateCarousel();
  });

  rightArrow.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++; 
    } else {
      currentIndex = 0; 
    }
    updateCarousel();
  });

  // Initialize the carousel
  updateCarousel();

  // Handle window resize to ensure proper centering
  window.addEventListener("resize", updateCarousel);

  // Countdown Timer Functionality
  const targetDate = new Date("May 31, 2025 07:30:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      document.querySelector(".countdown-timer").innerHTML = "Event Started!";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }

  setInterval(updateCountdown, 1000); 
});
