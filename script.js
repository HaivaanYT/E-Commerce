// Product data
const products = [
    { id: 1, name: "Classic T-Shirt", price: 19.99, image: "images/tshirt.jpg" },
    { id: 2, name: "Running Shoes", price: 49.99, image: "images/shoes.jpg" },
    { id: 3, name: "Summer Hat", price: 14.99, image: "images/hat.jpg" },
    { id: 4, name: "Leather Jacket", price: 99.99, image: "images/jacket.jpg" },
    { id: 5, name: "Jeans", price: 39.99, image: "images/jeans.jpg" },
    { id: 6, name: "Sunglasses", price: 24.99, image: "images/sunglasses.jpg" },
    { id: 7, name: "Wrist Watch", price: 129.99, image: "images/watch.jpg" },
    { id: 8, name: "Backpack", price: 59.99, image: "images/backpack.jpg" },
    { id: 9, name: "Headphones", price: 89.99, image: "images/headphones.jpg" }
  ];
  
  // Cart data
  let cart = [];
  
  // Function to render products on the page
  function loadProducts() {
      const productContainer = document.getElementById('products-list');
      products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          productCard.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h4>${product.name}</h4>
              <p>$${product.price}</p>
              <button onclick="addToCart(${product.id})">Add to Cart</button>
          `;
          productContainer.appendChild(productCard);
      });
  }
  
  // Function to add product to cart
  function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      cart.push(product);
      updateCart();
  }
  
  // Function to update cart display
  function updateCart() {
      // Update the cart count
      const cartCount = document.getElementById('cart-count');
      cartCount.textContent = cart.length;
  
      // Update the cart modal
      const cartItemsContainer = document.getElementById('cart-items');
      cartItemsContainer.innerHTML = '';  // Clear existing items
      let totalPrice = 0;
  
      cart.forEach((item, index) => {
          const cartItem = document.createElement('li');
          cartItem.innerHTML = `
              ${item.name} - $${item.price} 
              <button onclick="removeFromCart(${index})">Remove</button>
          `;
          cartItemsContainer.appendChild(cartItem);
          totalPrice += item.price;
      });
  
      // Update total price
      const totalPriceElement = document.getElementById('total-price');
      totalPriceElement.textContent = totalPrice.toFixed(2);
  }
  
  // Function to remove product from cart
  function removeFromCart(index) {
      cart.splice(index, 1);
      updateCart();
  }
  
  // Function to close the cart modal
  document.getElementById('close-cart').addEventListener('click', () => {
      document.getElementById('cart-modal').style.display = 'none';
  });
  
  // Show the cart when clicking on the cart icon
  document.querySelector('.cart-icon').addEventListener('click', () => {
      document.getElementById('cart-modal').style.display = 'block';
  });
  
  // Load products when the page loads
  window.onload = loadProducts;
  