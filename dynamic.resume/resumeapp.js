// Select form and display elements
var form = document.getElementById('resume-form');
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayEducation = document.getElementById('display-education');
var displayWorkExperience = document.getElementById('display-work-experience');
var displaySkills = document.getElementById('display-skills');
// Generate a unique URL based on name
var generateUniqueUrl = function (name) {
    var slug = name.trim().toLowerCase().replace(/\s+/g, '-');
    var uniqueUrl = "".concat(window.location.origin, "/").concat(slug);
    return uniqueUrl;
};
// Form submit event listener
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    // Update resume with user input
    displayName.textContent = name;
    displayEmail.textContent = "Contact: ".concat(email);
    displayEducation.textContent = education;
    displayWorkExperience.textContent = workExperience;
    // Display skills as a list
    var skillsArray = skills.split(',');
    displaySkills.innerHTML = ''; // Clear existing skills
    skillsArray.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        li.contentEditable = "true"; // Make skills editable
        displaySkills.appendChild(li);
    });
    // Generate unique URL
    var resumeUrl = generateUniqueUrl(name);
    var shareLink = document.getElementById('share-link');
    shareLink.textContent = resumeUrl;
    shareLink.setAttribute('href', resumeUrl);
});
// // PDF download functionality
var downloadPDF = function () {
    var resumeSection = document.getElementById('resume-section');
    if (resumeSection) {
        var originalContent = document.body.innerHTML; // Backup the current HTML content
        // Only print the resume section
        document.body.innerHTML = resumeSection.outerHTML;
        // Trigger the print dialog, where the user can choose "Save as PDF"
        window.print();
        // Restore the original content after print dialog closes
        document.body.innerHTML = originalContent;
    }
};
// Event listener for the button
var downloadButton = document.getElementById('download-pdf');
if (downloadButton) {
    downloadButton.addEventListener('click', downloadPDF);
}
