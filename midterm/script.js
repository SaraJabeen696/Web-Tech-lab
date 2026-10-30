
// Task 3 - Live Search, Price Sorting and Premium Labels

// Select existing product cards
const productGrid = document.querySelector(".product-grid");
const products = Array.from(
    productGrid.querySelectorAll(".product-card")
);

const searchInput = document.querySelector("#product-search");
const sortButton = document.querySelector("#sort-price");
const noProducts = document.querySelector("#no-products");

// Personal values
const N = 0;
const premiumLimit = N * 100;

// Extract product name
function getProductName(card) {
    return card.querySelector("h3").textContent.trim();
}

// Extract price from existing product card
function getProductPrice(card) {
    const priceText = card.querySelector("p").textContent;
    return Number(priceText.replace(/[^0-9.]/g, ""));
}

// Add Premium labels when page loads
products.forEach(function(card) {

    const price = getProductPrice(card);

    if (price > premiumLimit) {

        const premiumLabel = document.createElement("span");

        premiumLabel.textContent = "Premium";

        premiumLabel.className =
            "premium-label inline-block text-white text-xs px-2 py-1 rounded mt-2";

        card.appendChild(premiumLabel);
    }

});

// Search and category filtering
function filterProducts() {

    const searchText = searchInput.value.toLowerCase().trim();

    const selectedCategory = document.querySelector(
        'input[name="category"]:checked'
    ).id;

    let visibleCount = 0;

    products.forEach(function(card) {

        const productName = getProductName(card).toLowerCase();

        const category = card.dataset.category;

        const matchesSearch = productName.includes(searchText);

        let matchesCategory = true;

        if (selectedCategory !== "filter-all") {

            const categoryName = selectedCategory.replace("filter-", "");

            matchesCategory = category === categoryName;
        }

        const shouldShow = matchesSearch && matchesCategory;

        card.hidden = !shouldShow;

        if (shouldShow) {
            visibleCount++;
        }

    });

    // Show message when no products match
    if (visibleCount === 0) {

        noProducts.classList.remove("hidden");
        productGrid.style.display = "none";

    } else {

        noProducts.classList.add("hidden");
        productGrid.style.display = "";

    }

}

// Live search event
searchInput.addEventListener("input", filterProducts);

// Category filter events
document.querySelectorAll('input[name="category"]').forEach(
    function(radio) {

        radio.addEventListener("change", filterProducts);

    }
);

// Price sorting
let ascending = true;

sortButton.addEventListener("click", function() {

    products.sort(function(a, b) {

        const priceA = getProductPrice(a);
        const priceB = getProductPrice(b);

        if (ascending) {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }

    });

    // Move existing cards without recreating them
    products.forEach(function(card) {

        productGrid.appendChild(card);

    });

    ascending = !ascending;

    sortButton.textContent = ascending
        ? "Sort by Price"
        : "Sort by Price (High to Low)";

    filterProducts();

});

// Initial filtering
filterProducts();
