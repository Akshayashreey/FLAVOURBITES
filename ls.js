document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Create a JavaScript object with the form data
    var userData = {
        username: username,
        email: email,
        password: password
    };

    // Convert JavaScript object to JSON string
    var jsonData = JSON.stringify(userData);

    // Perform AJAX request to store data in JSON file
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'store_user.php'); // Replace 'store_user.php' with your server-side script URL
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Redirect to login page after successful signup
            window.location.href = 'login.html'; // Replace 'login.html' with your login page URL
        } else {
            console.log('Error storing data in JSON file');
        }
    };
    xhr.send(jsonData);
});
