if ( document.getElementById('loginForm') != null ) {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

     username = document.getElementById('username').value;
     password = document.getElementById('password').value;
     errorMessage = document.getElementById('error-message');
     storedUserName=localStorage.getItem("username");
    storedPassword=localStorage.getItem("password");
    if (username === '' && password === '') {
        alert('Login successful');
        // Redirect to the homepage or perform other actions upon successful login
        window.location.href = 'home.html';
        return;
    } 
    // Placeholder for actual authentication logic
    if (storedUserName === username && storedPassword === password) {
        alert('signin successful');
        // Redirect to the homepage or perform other actions upon successful login
        window.location.href = 'home.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
    
});

}
if (document.getElementById('registerForm') != null) {
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

     regusername = document.getElementById('reg-username').value;
     regemail = document.getElementById('reg-email').value;
     regpassword = document.getElementById('reg-password').value;
     regerrorMessage = document.getElementById('register-error-message');
     
     localStorage.setItem("username",regusername);
     localStorage.setItem("password",regpassword);
        storedUserName=localStorage.getItem("username");
        storedPassword=localStorage.getItem("password");
        
    // Placeholder for actual registration logic
    if (regusername && regemail && regpassword) {
        alert('Registration successful');
        // Redirect to the login page or perform other actions upon successful registration
        window.location.href = 'login.html';
    } else {
        regerrorMessage.textContent = 'Please fill in all fields';
        regerrorMessage.style.display = 'block';
    }
});

}