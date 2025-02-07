document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Add your JavaScript code to handle the form submission here

    fetch('http://localhost:3003/api/checkUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.valid) {
            // store data in local storage and redirect to admin.html
            let user = JSON.stringify({ username: email, valid: data.valid, admin: data.admin, cookie: data.usercookie });
            // console.log(user);
            localStorage.setItem('user', user);
            alert('Successfully logged in');
            window.location.href = 'admin.html';
        } else {
            // clear the form and local storage and show an alert
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            localStorage.removeItem('email');
            alert('Email or password is incorrect');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });


    // console.log('Email:', email);
    // console.log('Password:', password);
});