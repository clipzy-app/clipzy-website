
// Get hamburger menu button and mobile menu container
const menuHam = document.querySelector('.menu-ham');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');

// Add click event listener to hamburger menu button
menuHam.addEventListener('click', function() {
  // Toggle mobile menu visibility
  mobileMenuContainer.style.display = mobileMenuContainer.style.display === 'block' ? 'none' : 'block';
});

// Get close button in mobile menu
const closeBtn = document.querySelector('.close');

// Add click event listener to close button
closeBtn.addEventListener('click', function() {
  // Hide mobile menu
  mobileMenuContainer.style.display = 'none';
});


// here above i have provided a template for mobile menu interactivity in js