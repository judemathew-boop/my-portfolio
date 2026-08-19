let themeButton = document.getElementById("toggleTheme");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});

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

let skills = ["HTML", "CSS", "JavaScript"];

for (let skill of skills) {
    console.log("I am learning " + skill);
}

let projects = [
    {
        title:"My Portfolio",
        description:"I built this portfolio while learning Web Development.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://example.com"
    },
    {
        title:"Online OJT portal and monitoring",
        description:"A web-based platform designed to manage and monitor On-the-Job Training (OJT) activities.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://example.com"
    },
    {
        title:"To-do List",
        description:"A simple application for managing tasks.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://example.com"
    },
    {
        title:"Library Management System",
        description:"A web application for managing borrowed and returned books in a library.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        link: "https://example.com"
    },
    {
        title:"Weather App",
        description:"A web application that displays weather information.",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        link: "https://example.com"
    },
    {
        title:"Calculator",
        description: "A simple Calculator.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://example.com"
    },
];

let projectContainer = document.getElementById("projectContainer");

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

    if (project.link) {
        let projectLink = document.createElement("a");

        projectLink.textContent = "View Project";
        projectLink.href = project.link;
        projectLink.target = "_blank";

        card.appendChild(projectLink);
    }

    return card;
}

    for (let project of projects) {
        let card = createProjectCard(project);

        projectContainer.appendChild(card);
    }

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