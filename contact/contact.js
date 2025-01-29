// Getting the form data and sending it to the backend
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const formObject = {};

        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log(formObject);
        fetch('https://edunitbackend.onrender.com/api/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formObject)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // clear the form and alert that the message has been sent
            form.reset();
            alert('Message sent!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Message not sent. Please try again.');
        });
    });


});