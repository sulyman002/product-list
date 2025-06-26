<script>
    const products = [
      { id: 1, name: "Macaron Mix of Five", price: 8.00, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Vanilla Delight", price: 6.00, image: "https://via.placeholder.com/150" },
      { id: 3, name: "Choco Bliss", price: 7.50, image: "https://via.placeholder.com/150" },
      { id: 4, name: "Lemon Zest", price: 5.25, image: "https://via.placeholder.com/150" },
      { id: 5, name: "Strawberry Joy", price: 6.75, image: "https://via.placeholder.com/150" },
      { id: 6, name: "Mint Magic", price: 6.50, image: "https://via.placeholder.com/150" },
      { id: 7, name: "Coconut Dream", price: 7.25, image: "https://via.placeholder.com/150" },
      { id: 8, name: "Berry Blast", price: 6.90, image: "https://via.placeholder.com/150" },
      { id: 9, name: "Coffee Crave", price: 8.10, image: "https://via.placeholder.com/150" }
    ];

    const container = document.getElementById("productContainer");

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "bg-white rounded-xl shadow p-4 flex flex-col items-center text-center";

      card.innerHTML = `
        <img src="${product.image}" class="w-full h-40 object-cover rounded-md mb-4" />
        <p class="text-xs text-gray-500">Macaron</p>
        <h2 class="text-lg font-semibold">${product.name}</h2>
        <p class="text-red-600 font-bold mb-3">$${product.price.toFixed(2)}</p>

        <div class="flex items-center space-x-4 mt-auto">
          <button class="minus text-xl bg-gray-200 w-8 h-8 rounded-full">-</button>
          <p class="quantity text-lg font-medium">0</p>
          <button class="plus text-xl bg-gray-200 w-8 h-8 rounded-full">+</button>
        </div>
      `;

      let quantity = 0;
      const minusBtn = card.querySelector(".minus");
      const plusBtn = card.querySelector(".plus");
      const quantityDisplay = card.querySelector(".quantity");

      minusBtn.addEventListener("click", () => {
        if (quantity > 0) {
          quantity--;
          quantityDisplay.textContent = quantity;
        }
      });

      plusBtn.addEventListener("click", () => {
        quantity++;
        quantityDisplay.textContent = quantity;
      });

      container.appendChild(card);
    });
  </script>