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

