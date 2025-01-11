const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container_left h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container_left .container_btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".container_right h4", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".container_right h2", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".container_right h5", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".container_right p", {
  ...scrollRevealOption,
  delay: 3500,
});

ScrollReveal().reveal(".container_right .icecream-1", {
  duration: 1000,
  delay: 4000,
});
ScrollReveal().reveal(".container_right .icecream-2", {
  duration: 1000,
  delay: 4500,
});

ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 5000,
});

ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 5200,
  interval: 400,
});

function addToCart(productId) {
  alert("Product " + productId + " added to cart!");
}
function buyNow(productId) {
  alert("Buying product " + productId + " now!");
}

document.addEventListener('DOMContentLoaded', () => {
  const learnMoreBtn = document.getElementById('learn-more-btn');

  learnMoreBtn.addEventListener('click', () => {
      alert('Thank you for your interest! More details about our luxurious ice creams will be available soon.');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const inquireBtn = document.getElementById('inquire-btn');

  inquireBtn.addEventListener('click', () => {
      alert('Thank you for your interest! Please contact us at services@elysiancreamery.com for more information about our services.');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (name && email && message) {
          alert('Thank you for your message! We will get back to you shortly.');
          contactForm.reset();
      } else {
          alert('Please fill out all fields before submitting.');
      }
  });
});