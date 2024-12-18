const yearSpan = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
if (yearSpan) {
    yearSpan.textContent = currentYear;
}