let grid1 = document.getElementById("product-grid-1");
let grid2 = document.getElementById("product-grid-2");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop =()=>{
    grid1.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, img, quantity} = x;
        return `
        <a href="product-detail.html?id=${id}" class="product-card-link">
            <div class="product-card" id="product-id-${id}">
                <img src="${img}" alt="Product Image">
                <h4>${name}</h4>
                <p><span>RS ${price}</span> Mrp incl. of all taxes</p>
            </div>
        </a>
        `;
    }).join("");


    grid2.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, img, quantity} = x;
        return `
        <div class="product-card" id="product-id-${id}">
            <img src="${img}" alt="Product Image">
            <h4>${name}</h4>
            <p><span>RS ${price}</span> Mrp incl. of all taxes</p>
        </div>
        `;
    }).join("");

};

generateShop();