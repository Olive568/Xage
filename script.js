document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.LoginSquare form'); // Changed to target the form inside .wrapper
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents the default form submission behavior

            const username = document.getElementById('userbox').value;
            const password = document.getElementById('userpass').value;

            const validCredentials = {
                admin: 'password123',
                admin2: 'password456'
            };

            if (validCredentials[username] === password) {
                if (username === 'admin2') {
                    document.body.classList.add('admin2'); // Apply the color change for admin2
                }
                window.location.href = 'store.html'; // Redirect to store
            } else {
                alert('Invalid username or password. Please try again.');
            }
        });
    } else {
        console.error("Login form not found.");
    }
});
