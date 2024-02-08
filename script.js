document.addEventListener("DOMContentLoaded", () => {
    const generateResumeButton = document.getElementById("generateResume");
    const resumePreview = document.getElementById("resumePreview");
    const imageInput = document.getElementById("imageinput");
    let uploadedImage = null;

    imageInput.addEventListener('change', function() {
        var file = this.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var imagePreview = document.createElement('img');
            imagePreview.src = e.target.result;
            imagePreview.setAttribute('id', 'previewImage');
            resumePreview.innerHTML = ''; // Clear previous content
            resumePreview.appendChild(imagePreview);
            uploadedImage = imagePreview; // Save uploaded image reference
        }

        reader.readAsDataURL(file);
    });

    generateResumeButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission and page refresh
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const contact = document.getElementById("contact").value;
        const email = document.getElementById("email").value;
        const education = document.getElementById("education").value;
        const language = document.getElementById("language").value;
        const experience = document.getElementById("experience").value;

        const resumeContent = `
            ${uploadedImage ? uploadedImage.outerHTML : ''}
            <h2><strong>Name:</strong> ${name}</h2>
            <h2><strong>Address:</strong> ${address}</h2>
            <h2><strong>Contact:</strong> ${contact}</h2>
            <h2><strong>Email:</strong> ${email}</h2>
            <h2><strong>Education:</strong> ${education}</h2>
            <h2><strong>Language:</strong> ${language}</h2>
            <h2><strong>Experience:</strong> ${experience}</h2>
        `;

        resumePreview.innerHTML = resumeContent;
    });
});
