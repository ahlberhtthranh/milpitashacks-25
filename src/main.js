// JavaScript Code
document.addEventListener("DOMContentLoaded", () => {
  const targetDate = new Date("May 24, 2025 07:30:00").getTime();
  const countdownContainer = document.querySelector(".countdown-container");

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      countdownContainer.innerHTML = "Event Started!";
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

  // Ensure countdown does not cause horizontal scrolling
  function fixOverflow() {
    countdownContainer.style.overflow = "hidden";
    countdownContainer.style.maxWidth = "100%";
    countdownContainer.style.display = "flex";
    countdownContainer.style.flexWrap = "wrap"; 
    countdownContainer.style.justifyContent = "center"; 
  }

  // Run fixes
  fixOverflow();
  setInterval(updateCountdown, 1000);
  updateCountdown();
});

const tiersData = [
  {
    title: "Bronze",
    price: "$500",
    features: [
      "Send engineers/mentors to the event",
      "Distribute materials & resources to participants",
      "Host a workshop/activity at the event",
      "Logo on website & presentations",
    ],
    className: "bronze", 
  },
  {
    title: "Silver",
    price: "$1000",
    features: [
      "Everything in Bronze",
      "2 minute presentation at the opening/closing ceremony",
      "Access to the Milpitas Hacks mailing list",
    ],
    className: "silver", 
  },
  {
    title: "Gold",
    price: "$2000",
    features: [
      "Everything in Silver",
      "5 minute presentation at the opening/closing ceremony",
      "Table/demo booth at the event",
      "3 emails/discord announcements to all participants",
    ],
    className: "gold", 
  },
  {
    title: "Partner",
    price: "$3500",
    features: [
      "Everything in Gold",
      "Keynote at the opening/closing ceremony",
      "Custom project track",
      "Custom award",
      "Logo on shirts",
      "Contact information of the competition winners",
    ],
    className: "partner", 
  },
];

const tiersContainer = document.querySelector(".tiers");

tiersData.forEach((tier) => {
  const card = document.createElement("div");
  card.classList.add("card", tier.className); 

  const title = document.createElement("h2");
  title.textContent = tier.title;

  const price = document.createElement("p");
  price.textContent = tier.price;

  const featuresList = document.createElement("ul");
  tier.features.forEach((feature) => {
    const listItem = document.createElement("li");
    listItem.textContent = feature;
    featuresList.appendChild(listItem);
  });

  const button = document.createElement("a");
  button.textContent = "Contact Us";
  button.href = "mailto:milpitashacks@gmail.com"; 
  button.classList.add("contact-button");

  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(featuresList);
  card.appendChild(button);

  tiersContainer.appendChild(card);
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".faq-carousel");
  const cards = Array.from(document.querySelectorAll(".faq-card"));
  const leftArrow = document.querySelector(".faq-left-arrow");
  const rightArrow = document.querySelector(".faq-right-arrow");

  let currentIndex = 0;

  const updateCarousel = () => {
    const cardWidth = cards[0].offsetWidth + 5; 
    const offset = (carousel.parentElement.offsetWidth - cardWidth) / 2;

    // Adjust the carousel translation
    carousel.style.transform = `translateX(calc(-${currentIndex * cardWidth}px + ${offset}px))`;

    // Highlight the active card
    cards.forEach((card, index) => {
      card.classList.toggle("active", index === currentIndex);
    });
  };

  const moveCarousel = (direction) => {
    currentIndex = (currentIndex + direction + cards.length) % cards.length; 
    updateCarousel();
  };

  leftArrow.addEventListener("click", () => moveCarousel(-0.95)); 
  rightArrow.addEventListener("click", () => moveCarousel(0.95)); 

  window.addEventListener("resize", updateCarousel);

  // Initialize carousel position
  updateCarousel();
});