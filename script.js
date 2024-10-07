document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.LoginSquare form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const username = document.getElementById('userbox').value;
            const password = document.getElementById('userpass').value;

            const validCredentials = {
                RegularUser: 'RegularUser123',
                ShinyUser: 'ShinyUser123'
            };

            if (validCredentials[username] === password) {
                if (username === 'admin2') {
                    document.body.classList.add('admin2'); 
                }
                window.location.href = 'homeshiny.html'; 
            } else {
                alert('Invalid username or password. Please try again.');
            }
        });
    } else {
        console.error("Login form not found.");
    }
});
