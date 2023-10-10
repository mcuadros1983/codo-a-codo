const apiUrl =
  "https://api.mercadolibre.com/sites/MLA/search?nickname=BELLA_LOLA_DISTRIBUIDORA_DOS";

async function getProducts() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function displayProducts(products) {
  const productsContainer = document.getElementById("products-container");

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.src = product.thumbnail;
    productCard.appendChild(productImage);

    const productName = document.createElement("p");
    productName.innerText = product.title;
    productCard.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.innerText = `Precio: $${product.price}`;
    productCard.appendChild(productPrice);

    const productLink = document.createElement("a");
    productLink.href = product.permalink;
    productLink.innerText = "Ver en mercadolibre";
    productCard.appendChild(productLink);

    productsContainer.appendChild(productCard);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const products = await getProducts();
  displayProducts(products);
});

function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("active");
}


