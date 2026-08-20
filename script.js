function setupTheme() {
    let themeButton = document.getElementById("toggleTheme");

    themeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "Light Mode";
        } else {
            themeButton.textContent = "Dark Mode";
        }
    });
}

function setupHeadingButtons() {
    let heading = document.getElementById("mainHeading");
    let button = document.getElementById("welcomeButton");

    button.addEventListener("click", function() {
        heading.textContent = "Welcome to my Portfolio";
        heading.classList.add("highlight");
    });

    let resetButton = document.getElementById("resetButton");
    let originalText = heading.textContent;

    resetButton.addEventListener("click", function() {
        heading.textContent = originalText;
        heading.classList.remove("highlight");
    });
}

let skills = ["HTML", "CSS", "JavaScript", "Responsive Design", "Git", "GitHub"];

function displaySkills() {
    let skillsList = document.getElementById("skillsList");

    for (let skill of skills) {
        let skillItem = document.createElement("li");

        skillItem.textContent = skill;

        skillsList.appendChild(skillItem);
    }
}

let projects = [
    {
        title:"My Portfolio",
        description:"I built this portfolio while learning Web Development.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/judemathew-boop/my-portfolio"
    },
    {
        title:"Online OJT portal and monitoring",
        description:"A web-based platform designed to manage and monitor On-the-Job Training (OJT) activities.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://example.com"
    },
    {
        title:"To-do List",
        description:"A simple application for managing tasks.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://example.com"
    },
    {
        title:"Library Management System",
        description:"A web application for managing borrowed and returned books in a library.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        liveUrl: "https://example.com"
    },
    {
        title:"Weather App",
        description:"A web application that displays weather information.",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        liveUrl: "https://example.com"
    },
    {
        title:"Calculator",
        description: "A simple Calculator.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://example.com"
    },
];

function createProjectCard(project) {
    let card = document.createElement("div");
    let title = document.createElement("h3");
    let description = document.createElement("p");
    let technologyList = document.createElement("ul");

    card.classList.add("project-card");

    title.textContent = project.title;
    description.textContent = project.description;

    for (let technology of project.technologies) {
        let technologyItem = document.createElement("li");

        technologyItem.textContent = technology;

        technologyList.appendChild(technologyItem);
    }

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(technologyList);

    let projectLink = document.createElement("div");
    projectLink.classList.add("project-links");

    if (project.liveUrl) {
        let liveLink = document.createElement("a");

        liveLink.textContent = "View Project";
        liveLink.href = project.liveUrl;
        liveLink.target = "_blank";

        projectLink.appendChild(liveLink);        
    }

    if (project.githubUrl) {
        let githubLink = document.createElement("a");

        githubLink.textContent = "View on GitHub";
        githubLink.href = project.githubUrl;
        githubLink.target = "_blank";

        projectLink.appendChild(githubLink);
    }

    card.appendChild(projectLink);

    return card;
}

function displayProjects() {
    let projectContainer = document.getElementById("projectContainer");

    for (let project of projects) {
        let card = createProjectCard(project);

        projectContainer.appendChild(card);
    }
}

function setupContactForm() {
    let contactForm = document.getElementById("contactForm");
    let formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please complete all fields.";

            formMessage.classList.remove("success");
            formMessage.classList.add("error");
        } else {
            formMessage.textContent = "Message sent!";

            formMessage.classList.remove("error");
            formMessage.classList.add("success");
        }
    });
}

function setupActiveNavigation() {
    let navLinks = document.querySelectorAll("nav a");
    let sections = document.querySelectorAll("main section");

    window.addEventListener("scroll", function() {
        let currentSection = "home";

        for (let section of sections) {
            let sectionTop = section.getBoundingClientRect().top;

            if (sectionTop <= 120) {
                currentSection = section.id;
            }
        }   

        for (let link of navLinks) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        }
    });
}

setupTheme();
setupHeadingButtons();
displaySkills();
displayProjects();
setupContactForm();
setupActiveNavigation();