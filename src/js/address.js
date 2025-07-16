let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let orderList = document.getElementById("orderList");
let total = 0;

function generateList() {
  orderList.innerHTML = "";
  total = 0;

  cartData.forEach(item => {
    let { id, name, img, price, quantity } = item;
    total += price * quantity;
    orderList.innerHTML += `
      <div class="order-item">
        <img src="${img}" />
        <div class="order-item-left">
          <p>${name}</p>
          <div class="size-qty">
            <span>Size: L</span>
            <span>Qty: ${quantity}</span>
          </div>
        </div>
        <div class="order-item-right">
          <p class="price">Rs. ${price * quantity}</p>
          <button type="button" onclick="removeItem('${id}')">Remove</button>
        </div>
      </div>
    `;
  });

  document.getElementById("subtotal").textContent = `RS. ${total}`;
  document.getElementById("total").textContent = `RS. ${total}`;
}

function removeItem(id) {
  cartData = cartData.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cartData));
  location.reload();
}

generateList();

const proceedBtn = document.querySelector(".proceed");

  if (proceedBtn) {
    proceedBtn.addEventListener("click", () => {
      const fieldIds = [
        "first-name", "last-name", "email",
        "street", "country", "city",
        "state", "zip"
      ];

      const allFilled = fieldIds.every(id => {
        const field = document.getElementById(id);
        const isEmpty = !field.value.trim();
        return !isEmpty;
      });

      const billingSelected = document.querySelector('input[name="billingSame"]:checked');

      if (!allFilled) {
        alert("Please fill in all required fields.");
      } else if (!billingSelected) {
        alert("Please select if billing address is the same as shipping address.");
      } else {
        window.location.href = "payment.html";
      }
    });
  }