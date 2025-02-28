<script>
  // Array to store cart items
  const cartItems = [];

  // Function to update the cart display
  function updateCart() {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalContainer = document.querySelector(".total");

    // Clear existing items in the cart display
    cartItemsContainer.innerHTML = "";

    // Calculate total price
    let totalPrice = 0;

    // Add each cart item to the cart display
    cartItems.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.price}`;
      
      // Add a remove button for each item
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.style.marginLeft = "10px";
      removeButton.onclick = () => {
        cartItems.splice(index, 1); // Remove item from array
        updateCart(); // Refresh the cart
      };
      li.appendChild(removeButton);

      cartItemsContainer.appendChild(li);
      totalPrice += item.price;
    });

    // Update the total price
    totalContainer.textContent = `Total: ₹${totalPrice}`;
  }

  // Add event listeners to "Add to Cart" buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      const name = event.target.getAttribute("data-name");
      const price = parseInt(event.target.getAttribute("data-price"));

      // Add item to the cart array
      cartItems.push({ name, price });

      // Update the cart display
      updateCart();
    });
  });
</script>
