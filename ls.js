document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Create a JavaScript object with the form data
    var userData = {
        username: username,
        password: password
    };

    // Convert JavaScript object to JSON string
    var jsonData = JSON.stringify(userData);

    // Perform AJAX request to add data to JSON file
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'add_user.php'); // Replace 'add_user.php' with your server-side script URL
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Redirect to menu page after successful data addition
            window.location.href = 'menu.html'; // Replace 'menu.html' with your menu page URL
        } else {
            console.log('Error adding data to JSON file');
        }
    };
    xhr.send(jsonData);
});
