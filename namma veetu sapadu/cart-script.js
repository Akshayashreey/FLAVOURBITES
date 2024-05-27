document.addEventListener("DOMContentLoaded", function() {
    // Simulated menu items data
    const menuItems = [
        { name: "IDLI", price: 20, image: "idli.jpg" },
        { name: "DOSA", price: 30, image: "dosa.jpg" },
        { name: "UTTAPAM", price: 60, image: "uttapam.jpg" },
        { name: "PULIYODHARAI", price: 80, image: "Puliyodharai.jpg" },
        { name: "LEMON RICE", price: 70, image: "lemon-rice.jpg" },
        { name: "VEG FULL MEALS", price: 250, image: "veg-full-meals.jpg" },
        { name: "KONGU NADU FULL NON VEG MEALS", price: 300, image: "kongu-nadu-full-meal.jpg" },
        // Add more menu items as needed
    ];

    const menuContainer = document.querySelector(".menu-items");
    const cartContainer = document.querySelector(".cart-items");

    menuItems.forEach(item => {
        const menuItemDiv = document.createElement("div");
        menuItemDiv.classList.add("menu-item");
        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
        `;
        menuContainer.appendChild(menuItemDiv);
    });

    function addToCart(itemName, price) {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        cartItemDiv.innerHTML = `
            <h3>${itemName}</h3>
            <p>$${price}</p>
        `;
        cartContainer.appendChild(cartItemDiv);
    }
});
