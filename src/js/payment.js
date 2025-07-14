document.addEventListener("DOMContentLoaded", function () {
  // Generate order summary
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  let orderList = document.getElementById("orderList");
  let total = 0;

  orderList.innerHTML = "";
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
        </div>
      </div>
    `;
  });

  // Handle UPI/Card section toggle
  const paymentRadios = document.querySelectorAll('input[name="payment-method"]');
  const upiSection = document.getElementById("upi-section");
  const cardSection = document.getElementById("card-section");

  paymentRadios.forEach(radio => {
    radio.addEventListener("change", function () {
      upiSection.style.display = "none";
      cardSection.style.display = "none";

      if (this.value === "upi") {
        upiSection.style.display = "block";
      } else if (this.value === "card") {
        cardSection.style.display = "block";
      }
    });
  });
});
