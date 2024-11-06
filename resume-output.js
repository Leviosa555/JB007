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

    
    
});


