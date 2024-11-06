document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(localStorage.getItem("resumeData")); // Retrieve the stored data
    const profilePic = localStorage.getItem("profilePic"); // Retrieve the profile picture

    if (data) {
        document.getElementById("profileName").textContent = data.name;
        document.getElementById("dob").textContent = "Date of Birth: " + data.dob;
        document.getElementById("address").textContent = "Address: " + data.address;
        document.getElementById("maritalStatus").textContent = "Marital Status: " + data.maritalStatus;
        document.getElementById("email").textContent = "Email: " + data.email;
        document.getElementById("phone").textContent = "Phone: " + data.phone;
        document.getElementById("summary").textContent = data.summary;
        document.getElementById("education").textContent = data.education;
        document.getElementById("skills").textContent = data.skills;
        document.getElementById("experience").textContent = data.experience;
        document.getElementById("internship").textContent = data.internship;
        document.getElementById("hobbies").textContent = data.hobbies;
        document.getElementById("languages").textContent = data.languages;

        // Set the profile picture if available
        if (profilePic) {
            document.getElementById("profilePic").src = profilePic; // Set the profile picture
        }
    }

    document.getElementById('downloadButton').addEventListener('click', function() {
        // Select the element that you want to download as a PDF
        const resumeContent = document.getElementById('resumeContent'); // replace with your resume section's id
        
        // Set up PDF options
        const options = {
            margin:       0.2,
            filename:     'resume.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
        };
    
        // Generate the PDF
        html2pdf().set(options).from(resumeContent).save();
    });

    
    
});


