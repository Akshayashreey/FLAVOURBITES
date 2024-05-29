document.addEventListener('DOMContentLoaded', function() {
    // Auto play video
    var video = document.getElementById('bg-video');
    video.play();
  

// Function to filter and display menu items based on search term
function filterMenuItems(searchTerm) {
    const filteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const menuItemsContainer = document.getElementById('menuItems');
    menuItemsContainer.innerHTML = ''; // Clear previous results

    filteredItems.forEach(item => {
        const menuItemHTML = generateMenuItemHTML(item);
        menuItemsContainer.insertAdjacentHTML('beforeend', menuItemHTML);
    });
}

// Get the search input element
const searchInput = document.getElementById('searchInput');

// Add event listener for input event
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim(); // Trim whitespace
    filterMenuItems(searchTerm);
});

// Initial display of all menu items
filterMenuItems('');
    // Handle login form submission
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get the values of username and password fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic client-side validation (you can add more)
        if (username.trim() === 'admin' || password.trim() === '12345') {
            alert('Login successful');
            window.location.href = "index.html"; // Redirect to index.html after successful login
        } else {
            alert('Invalid username or password'); // Show an alert for invalid credentials
        }

        // Here you can perform client-side actions like displaying loading spinner, etc.

        // Simulate login process (you can replace this with actual login logic)
        setTimeout(function() {
            //alert(`Welcome, ${username}!`);
            // Redirect or perform other actions after successful login
        }, 1000); // Simulating a delay for demo purposes
    });
});
