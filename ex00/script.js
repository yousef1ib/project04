const themeToggleBtn = document.getElementById("themeToggleBtn");
const bodyElement = document.body;

themeToggleBtn.addEventListener("click", function() {
    bodyElement.classList.toggle("dark-mode");
    if (bodyElement.classList.contains("dark-mode")) {
        themeToggleBtn.textContent = "Light Mode";
    } else {
        themeToggleBtn.textContent = "Dark Mode";
    }
});
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message! (Simulated submission)");
    contactForm.reset();
});