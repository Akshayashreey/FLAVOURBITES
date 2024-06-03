// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // You can perform additional validation here if needed
    
    // Display form data (you can modify this part to send the data to a server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
    
    // Clear the form
    event.target.reset();
}

// Add event listener to the form submission
const form = document.querySelector('.contact-form form');
form.addEventListener('submit', handleSubmit);
