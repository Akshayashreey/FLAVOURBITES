document.addEventListener("DOMContentLoaded", function() {
    // Simulated menu items data
    const menuItems = [
        { name: "IDLI", price: 30, image: "idli.jpg" },
        { name: "DOSA", price: 40, image: "dosa .jpg" },
        { name: "UTTAPAM", price: 80, image: "uttapam.jpg" },
        { name: "PULIYODHARAI", price: 70, image: "Puliyodharai.jpg" },
        { name: "LEMON RICE", price: 75, image: "lemon-rice.jpg.jpg" },
        { name: "VEG FULL MEALS", price: 350, image: "veg full meals.jpg" },
        { name: "KONGU NADU FULL NON VEG MEALS", price: 650, image: "kongu nadu full meal.jpg" },
        // Add more menu items as needed
    ];

    const menuContainer = document.querySelector(".menu-items");

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

    // Function to scroll the menu container to the bottom
    function scrollMenuToBottom() {
        menuContainer.scrollTop = menuContainer.scrollHeight;
    }

    // Call the function to scroll menu to the bottom
    scrollMenuToBottom();
});

function addToCart(itemName, price) {
    // Add functionality to add items to cart
    console.log("Added to cart:", itemName, price);
}
