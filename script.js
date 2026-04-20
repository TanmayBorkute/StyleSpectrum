$(document).ready(function () {
    // Smooth scrolling for anchor links
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault(); // Prevent default anchor behavior
        var hash = this.hash; // Get the hash value
        $("html, body").animate( // Smooth scroll animation
          {
            scrollTop: $(hash).offset().top, // Scroll to the target element's top position
          },
          800, // Animation duration in milliseconds
          function () {
            window.location.hash = hash; // Update the URL hash
          }
        );
      }
    });
  });
  
  // Close navbar menu when a menu item is clicked
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false); // Uncheck the checkbox
  });
  
// script.js

// Function to add item to cart
function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: productName, price: price, quantity: 1 });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} added to cart.`);
}

// Function for Buy Now
function buyNow(productName, price) {
  let cart = [{ name: productName, price: price, quantity: 1 }];
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'cart.html'; // Redirect to cart
}

// Initialize add-to-cart and buy-now buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
      const product = button.dataset.product;
      const price = parseFloat(button.dataset.price);
      addToCart(product, price);
  });
});

document.querySelectorAll('.buy-now').forEach(button => {
  button.addEventListener('click', () => {
      const product = button.dataset.product;
      const price = parseFloat(button.dataset.price);
      buyNow(product, price);
  });
});
