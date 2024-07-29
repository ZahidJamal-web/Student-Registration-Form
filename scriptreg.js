function validateForm() {
    // Get form elements
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const grade = document.getElementById('grade').value;
    const profilePicture = document.getElementById('profilePicture').files[0];

    // Email Validation</html>
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Phone Number Validation
    if (!validatePhoneNumber(phone)) {
        alert('Please enter a valid phone number (e.g., 123-456-7890).');
        return false;
    }

    // Grade Validation
    if (!validateGrade(grade)) {
        alert('Please enter a valid grade (e.g., A, B, C).');
        return false;
    }

    // Profile Picture Validation
    if (!profilePicture) {
        alert('Please upload a profile picture.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhoneNumber(phone) {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(phone);
}

function validateGrade(grade) {
    const validGrades = ['A', 'B', 'C', 'D', 'E', 'F'];
    return validGrades.includes(grade.toUpperCase());
}
