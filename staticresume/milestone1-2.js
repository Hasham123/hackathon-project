var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
var switchThemeButton = document.getElementById('switch-theme');
var resumeContainer = document.querySelector('.resume-container');
var isDarkTheme = false;
switchThemeButton.addEventListener('click', function () {
    if (isDarkTheme) {
        // Switch to normal theme
        resumeContainer.classList.remove('dark-theme');
        switchThemeButton.textContent = 'Switch Theme';
        isDarkTheme = false;
    }
    else {
        // Switch to dark, blurred theme
        resumeContainer.classList.add('dark-theme');
        switchThemeButton.textContent = 'Switch Back';
        isDarkTheme = true;
    }
});
