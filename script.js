// Resume details (hidden initially)
const resumeData = {
    "resume-education": "🎓 Bachelor's in Computer Science",
    "resume-experience": "💼 Software Developer at XYZ (2020 - Present)",
    "resume-skills": "🛠 JavaScript, Firebase, PWA, CSS"
};

// Handle clicks on resume parts
document.querySelectorAll('.searchable').forEach(item => {
    item.addEventListener('click', function() {
        this.textContent = resumeData[this.id]; // Reveal resume details
        this.style.backgroundColor = "#90ee90"; // Change to green
        this.style.cursor = "default"; // Remove pointer after found
        document.getElementById("info-box").innerHTML = "You found: " + this.id.replace("resume-", "").toUpperCase();
    });
});

// Handle clicks on projects (open GitHub links)
document.querySelectorAll('.project').forEach(item => {
    item.addEventListener('click', function() {
        let projectUrl = this.getAttribute("data-url");
        window.open(projectUrl, "_blank"); // Open GitHub link in new tab
        document.getElementById("info-box").innerHTML = "Opening project: " + this.id.toUpperCase();
    });
});
