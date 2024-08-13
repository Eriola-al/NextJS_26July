document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const darkThemeClass = 'dark-theme';

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle(darkThemeClass);
        
        if (document.body.classList.contains(darkThemeClass)) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });
});