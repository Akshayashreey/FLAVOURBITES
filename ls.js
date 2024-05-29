// Login form
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // Add your login logic here
    console.log("admin@gmail.com", username, "admin123", password);
    window.location.href = 'menu.html';
});

// Sign up form
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Add your sign up logic here
    console.log("admin", username, "admin@gmail.com", email, "admin123", password); 
    window.location.href = 'menu.html';
});
