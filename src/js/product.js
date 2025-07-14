let params = new URLSearchParams(window.location.search);
let productId = params.get("id");

// Find product from shopItemsData
let selectedProduct = shopItemsData.find((x) => x.id === productId);

// Select the container to update
let product = document.getElementById("image-gallery");

if (selectedProduct) {
  let { id, name, price, img } = selectedProduct;

  product.innerHTML = `
    <img src="${img}" alt="Main Product" class="main-image scale-hover">
    <div class="thumbnail-row">
      <img src="src/images.checkout/1715236404_5770792 1-1.jpg" alt="Thumb 1" class="thumbnail scale-hover">
      <img src="src/images.checkout/1715236404_5770792 1-3.jpg" alt="Thumb 2" class="thumbnail scale-hover">
      <img src="src/images.checkout/1715236404_5770792 3.jpg" alt="Thumb 3" class="thumbnail scale-hover">
      <button class="show-all" onclick="location.href='shop.html'">Show all</button>
    </div>
  `;
}

product = document.getElementById("product-info");

if(selectedProduct){
    let{id, name, price, img} = selectedProduct;

    product.innerHTML = `
        <h1>${name}</h1>
        <p class="price">RS. ${price}<br><span>MRP incl. of all taxes</span></p>

        <div class="size-selector">
            <p>Please select a size</p>
            <div class="sizes">
            <button>S</button><button>M</button><button>L</button>
            <button>XL</button><button>XXL</button>
            </div>
        </div>

        <label for="quantity">Quantity</label>
        <select id="quantity">
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
        </select>

        <!-- Image-based Add to Cart -->
        <div class="add-to-cart-image scale-hover">
            <img src="src/images.checkout/add to cart.png" alt="Add to Cart" />
        </div>

        <div class="product-details">
            <h4>Product Details:</h4>
            <p><strong>Material & Care:</strong><br>100% Cotton<br>Machine Wash</p>
            <p><strong>Country of Origin:</strong> India</p>
            <p><strong>Description:</strong><br>
            A RELAXED-FIT SHIRT MADE OF CUPRO SATIN FABRIC. CAMP COLLAR AND SHORT SLEEVES. BUTTON-UP FRONT. ALL OVER DIGITAL PRINT.
            </p>
        </div>
    `;
}
