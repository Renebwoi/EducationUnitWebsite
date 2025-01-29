async function fetchProjects() {
    try {
        // http://localhost:3003
        const response = await fetch('https://edunitbackend.onrender.com/api/getProjects');
        const projects = await response.json();
        displayProjects(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

function displayProjects(projects) {
    const projectHold = document.querySelector('.projectHold');
    console.log("projects: ",projects);

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = 'project image';

        const projectTextDiv = document.createElement('div');
        projectTextDiv.classList.add('projectText');

        const h1 = document.createElement('h1');
        h1.textContent = project.headlines;

        const h2 = document.createElement('h2');
        h2.textContent = `By ${project.author}`;

        const p = document.createElement('p');
        p.textContent = project.body;



        projectTextDiv.appendChild(h1);
        projectTextDiv.appendChild(h2);
        projectTextDiv.appendChild(p);
        if (project.projectLink !== "null") {
            const a = document.createElement('a');
            a.href = project.projectLink;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = 'View Project';
            projectTextDiv.appendChild(a);
        }

        projectDiv.appendChild(img);
        projectDiv.appendChild(projectTextDiv);

        projectHold.appendChild(projectDiv);
    });
}

fetchProjects();
