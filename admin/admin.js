const user = JSON.parse(localStorage.getItem('user'));

// we need to check if the user is an admin then welcome them
if (!user) {
    window.location.href = 'index.html';
} else if (user.admin) {
    console.log(user.username);
    const usernameWithoutDomain = user.username.replace('@gmail.com', '');
    document.querySelector('.useename').textContent += " " + usernameWithoutDomain;
}

document.querySelector('.newsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const imageLink = document.querySelector('.newsImage').value;
    const headline = document.querySelector('.newsHeadline').value;
    const body = document.querySelector('.newsBody').value;
    // Add your JavaScript code to handle the form submission here

    fetch('https://edunitbackend.onrender.com/api/postNews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            image: imageLink, 
            headlines: headline,
            body: body 
        })
    })
    .then(response => response.json())
    .then(data => {
            alert('Successfully added news');
    })
    .catch(error => {
        // clear the form and local storage and show an alert
        document.querySelector('.newsImage').value = '';
        document.querySelector('.newsHeadline').value = '';
        document.querySelector('.newsBody').value = '';
        alert('Error adding news');

        console.error('Error:', error);
    });

});



document.querySelector('.projectForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const imageLink = document.querySelector('.projectImage').value;
    const headline = document.querySelector('.projectHeadline').value;
    const author = document.querySelector('.projectAuthor').value;
    const body = document.querySelector('.projectBody').value;
    let projectLink = document.querySelector('.projectLink').value;
    // if projectLink is equal to "none" then set it to "null"
    if (projectLink == "none") {
        projectLink = "null";
        console.log(projectLink);
    }
    // Submitting the form to the backend

    fetch('https://edunitbackend.onrender.com/api/postProjects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            image: imageLink, 
            headlines: headline,
            body: body,
            author: author,
            projectLink: projectLink,
        })
    })
    .then(response => {
        if (response.status === 200) {
            alert('Successfully added project');
        } else {
            alert('Error adding project');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        // clear the form and local storage and show an alert
        document.querySelector('.projectImage').value = '';
        document.querySelector('.projectHeadline').value = '';
        document.querySelector('.projectBody').value = '';
        document.querySelector('.projectAuthor').value = '';
        document.querySelector('.projectLink').value = '';
        alert('Error adding project');

        console.error('Error:', error);
    });

});