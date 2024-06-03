document.addEventListener('DOMContentLoaded', function() {
    const orderItems = JSON.parse(localStorage.getItem('order')) || [];
    const orderItemsContainer = document.querySelector('.order-items');
    const backToMenuButton = document.querySelector('.back-to-menu');
    const placeOrderButton = document.querySelector('.place-order');

    // Function to display order items
    function displayOrderItems() {
        orderItemsContainer.innerHTML = ''; // Clear existing items
        orderItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('order-item');
            itemElement.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                </div>
                <input type="number" class="quantity-input" value="1" min="1">
            `;
            orderItemsContainer.appendChild(itemElement);
        });
    }

    // Display order items when the page loads
    displayOrderItems();

    // Handle "Back to Menu" button click
    backToMenuButton.addEventListener('click', function() {
        window.location.href = 'menu.html'; // Replace 'menu.html' with the path to your menu page
    });

    // Handle place order button click
    placeOrderButton.addEventListener('click', function() {
        // Collect user details
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;

        // Collect order details including quantity
        const orderDetails = [];
        const quantityInputs = document.querySelectorAll('.quantity-input');
        orderItems.forEach((item, index) => {
            const quantity = parseInt(quantityInputs[index].value);
            if (quantity > 0) {
                const total = item.price * quantity;
                orderDetails.push({ ...item, quantity, total });
            }
        });

        // Optionally, you can validate user details here

        // Optionally, you can validate the order details here

        // Example: Send the order details to a server
        // Replace this with your actual server-side code
        console.log('User Details:', { name, email, phone, address });
        console.log('Order Details:', orderDetails);

        // Optionally, you can clear the order from local storage after placing the order
        localStorage.removeItem('order');

        // Redirect to home page or order confirmation page
        window.location.href = 'confirmation1.html'; // Replace 'index.html' with the path to your home page or order confirmation page
    });
});
