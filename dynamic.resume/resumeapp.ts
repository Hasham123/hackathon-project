// Select form and display elements
let form = document.getElementById('resume-form') as HTMLFormElement;
const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayEducation = document.getElementById('display-education') as HTMLElement;
const displayWorkExperience = document.getElementById('display-work-experience') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;

// Generate a unique URL based on name
const generateUniqueUrl = (name: string): string => {
    const slug = name.trim().toLowerCase().replace(/\s+/g, '-');
    const uniqueUrl = `${window.location.origin}/${slug}`;
    return uniqueUrl;
};

// Form submit event listener
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Update resume with user input
    displayName.textContent = name;
    displayEmail.textContent = `Contact: ${email}`;
    displayEducation.textContent = education;
    displayWorkExperience.textContent = workExperience;

    // Display skills as a list
    const skillsArray = skills.split(',');
    displaySkills.innerHTML = ''; // Clear existing skills
    skillsArray.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        li.contentEditable = "true"; // Make skills editable
        displaySkills.appendChild(li);
    });

    // Generate unique URL
    const resumeUrl = generateUniqueUrl(name);
    const shareLink = document.getElementById('share-link') as HTMLAnchorElement;
    shareLink.textContent = resumeUrl;
    shareLink.setAttribute('href', resumeUrl);
});

// // PDF download functionality
const downloadPDF = () => {
    const resumeSection = document.getElementById('resume-section');

    if (resumeSection) {
        const originalContent = document.body.innerHTML; // Backup the current HTML content

        // Only print the resume section
        document.body.innerHTML = resumeSection.outerHTML;

        // Trigger the print dialog, where the user can choose "Save as PDF"
        window.print();

        // Restore the original content after print dialog closes
        document.body.innerHTML = originalContent;
    }
};

// Event listener for the button
const downloadButton = document.getElementById('download-pdf');
if (downloadButton) {
    downloadButton.addEventListener('click', downloadPDF);
}