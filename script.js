const cartIcon = document.querySelector(".cart-icon");
const cartDropdown = document.querySelector(".cart-dropdown");
const addButtons = document.querySelectorAll(".add-cart");
const cartItemsList = document.querySelector(".cart-items");
const cartCount = document.querySelector(".cart-count");

let cart = [];

// Toggle cart dropdown
cartIcon.addEventListener("click", () => {
  cartDropdown.classList.toggle("hidden");
});

addButtons.forEach(button => {
  button.addEventListener("click", () => {
    const productCard = button.parentElement;
    const name = productCard.querySelector("h4").textContent;
    const price = productCard.querySelector("p").textContent;

    cart.push({name, price});
    updateCartUI();
  });
});

function removeItem(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  cartItemsList.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ${item.price} <span onclick="removeItem(${index})">X</span>`;
    cartItemsList.appendChild(li);
  });
  cartCount.textContent = cart.length;
}
