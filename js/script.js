



// Theme toggle (light/dark)
const themeBtn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");
if (saved) document.documentElement.setAttribute("data-theme", saved);

themeBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "" : "dark";
    if (next) document.documentElement.setAttribute("data-theme", next);
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", next);
});

// Contact form interaction (no backend)
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "Message sent successfully";
    form.reset();
});
