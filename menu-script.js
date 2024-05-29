function addToCart(itemName, itemPrice) {
    // Retrieve cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the item already exists in the cart
    const existingItemIndex = cartItems.findIndex(item => item.name === itemName);

    if (existingItemIndex > -1) {
        // If the item already exists, increment its quantity
        cartItems[existingItemIndex].quantity += 1;
    } else {
        // If the item does not exist, add it to the cart
        const newItem = {
            name: itemName,
            price: itemPrice,
            quantity: 1
        };
        cartItems.push(newItem);
    }

    // Save updated cart items to localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    alert(`${itemName} has been added to your cart.`);

    // Redirect the user to the billing page
    window.location.href = "billing.html";
}
