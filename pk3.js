const products = [
    { id: 1, name: "Product 1", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", image: "https://via.placeholder.com/150" },
];

const cart = [];

// Render Products
const productContainer = document.getElementById("products");
products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <p>${product.name}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productElement);
});

// Render Cart
const cartContainer = document.getElementById("cartItems");

function renderCart() {
    cartContainer.innerHTML = "";
    cart.forEach((item) => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
            ${item.name}
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product && !cart.find((item) => item.id === productId)) {
        cart.push(product);
        renderCart();
    } else {
        alert("Product already in the cart.");
    }
}

// Remove from Cart
function removeFromCart(productId) {
    const productIndex = cart.findIndex((item) => item.id === productId);
    if (productIndex > -1) {
        cart.splice(productIndex, 1);
        renderCart();
    }
}
