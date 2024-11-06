document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const data = {
        name: document.getElementById("name").value,
        dob: document.getElementById("dob").value,
        address: document.getElementById("address").value,
        maritalStatus: document.getElementById("maritalStatus").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        summary: document.getElementById("summary").value,
        education: document.getElementById("education").value,
        skills: document.getElementById("skills").value,
        experience: document.getElementById("experience").value,
        internship: document.getElementById("internship").value,
        hobbies: document.getElementById("hobbies").value,
        languages: document.getElementById("languages").value
    };

    // Handle profile picture
    const profilePicInput = document.getElementById("profilePic");
    const profilePicFile = profilePicInput.files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
        // Store data in localStorage
        localStorage.setItem("resumeData", JSON.stringify(data));
        localStorage.setItem("profilePic", reader.result); // Store the profile picture

        // Redirect to the resume output page
        window.location.href = "resume-output.html";
    };

    if (profilePicFile) {
        reader.readAsDataURL(profilePicFile);
    } else {
        // If no file is selected, just redirect with the rest of the data
        localStorage.setItem("resumeData", JSON.stringify(data));
        window.location.href = "resume-output.html";
    }
});
