let recommendSection = document.getElementById("recommend-grid");

// Pick first 4 items from shopItemsData
let recommended = shopItemsData.slice(0, 4);

recommendSection.innerHTML = recommended.map((item) => {
    let { id, name, price, img } = item;
    return `
        <div class="recommend-card" onclick="location.href='product-detail.html?id=${id}'">
        <img src="${img}" alt="${name}">
        <h4>${name}</h4>
        <p>RS ${price}</p>
        </div>
    `;
}).join("");

let cartItemsContainer = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");
let cartGst = document.getElementById("cart-gst");

let cartData = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  if (cartData.length === 0) {
    cartItemsContainer.innerHTML = "<p class = empty-cart>Your cart is empty.</p>";
    cartTotal.textContent = "₹0";
    cartGst.textContent = "₹0";
    return;
  }

  let total = 0;
  cartItemsContainer.innerHTML = cartData.map((item, index) => {
    let { id, name, price, img, quantity } = item;
    total += price * quantity;

    return `
      <div class="cart-item-card">
        <img src="${img}" class="cart-item-img" alt="${name}" />
        <div class="cart-item-details">
          <h4>${name}</h4>
          <p>Size: L</p>
          <p>Quantity: ${quantity}</p>
          <p>₹${price}</p>
          <span>MRP incl. of all taxes</span>
        </div>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  }).join("");

  let gst = Math.round(total * 0.18);
  cartTotal.textContent = `₹${total}`;
  cartGst.textContent = `₹${gst}`;
}

function removeItem(index) {
  cartData.splice(index, 1);
  localStorage.setItem("cartData", JSON.stringify(cartData));
  renderCart();
}

renderCart();
