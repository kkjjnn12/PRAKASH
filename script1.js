document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-name');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    // Add item to the cart
    cart.push({ name: productName, price: productPrice });

    // Update total price
    let totalcart = [];
let totalPrice = 0;

Price += productPrice;

    // Update cart UI
    const cartItemsList = document.querySelector('.cart-items');
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - ₹${productPrice}`;
    cartItemsList.appendChild(cartItem);

    // Update total price in the UI
    document.querySelector('.total').textContent = `Total: ₹${totalPrice}`;
  });
});
