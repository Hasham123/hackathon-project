const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
const switchThemeButton = document.getElementById('switch-theme') as HTMLButtonElement;
const resumeContainer = document.querySelector('.resume-container') as HTMLElement;
let isDarkTheme = false;

switchThemeButton.addEventListener('click', () => {
    if (isDarkTheme) {
        // Switch to normal theme
        resumeContainer.classList.remove('dark-theme');
        switchThemeButton.textContent = 'Switch Theme';
        isDarkTheme = false;
    } else {
        // Switch to dark, blurred theme
        resumeContainer.classList.add('dark-theme');
        switchThemeButton.textContent = 'Switch Back';
        isDarkTheme = true;
    }
});

