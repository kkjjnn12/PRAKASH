let cart = [];
let totalPrice = 0;

// Function to add product to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productElement = button.parentElement;
    const productName = productElement.getAttribute('data-name');
    const productPrice = parseFloat(productElement.getAttribute('data-price'));

    // Add product to cart
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;

    // Update cart UI
    updateCart();
  });
});

// Function to remove product from the cart
function removeFromCart(index) {
  // Subtract the product price from the total price
  totalPrice -= cart[index].price;

  // Remove the product from the cart array
  cart.splice(index, 1);

  // Update cart UI
  updateCart();
}

// Function to update the cart UI
function updateCart() {
  const cartItemsList = document.querySelector('.cart-items');
  const totalElement = document.querySelector('.total');

  // Clear current cart UI
  cartItemsList.innerHTML = '';

  // Populate the cart items in the UI
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button class="remove-from-cart" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsList.appendChild(li);
  });

  // Update total price in the UI
  totalElement.textContent = `Total: ₹${totalPrice}`;
}
