// ================================
// STUDENT REGISTRATION SYSTEM
// ================================

// Load records when page loads
document.addEventListener("DOMContentLoaded", () => {
    loadRecords();
});

// ================================
// SUBMIT FORM
// ================================

function submitForm() {

    const form = document.getElementById("registrationForm");
    const formData = new FormData(form);

    // Validate form before submission
    if (!validateForm()) {
        return;
    }

    // Create student record object
    const record = {
        id: Date.now(),

        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        dob: formData.get("dob"),
        gender: formData.get("gender"),

        email: formData.get("email"),
        confirmEmail: formData.get("confirmEmail"),

        phone: formData.get("phone"),

        course: formData.get("course"),
        year: formData.get("year"),

        grade: formData.get("grade"),
        cgpa: formData.get("cgpa"),

        createdAt: new Date().toLocaleString()
    };

    // Get existing records
    let records = JSON.parse(localStorage.getItem("records")) || [];

    // Add new record
    records.push(record);

    // Save back to localStorage
    localStorage.setItem("records", JSON.stringify(records));

    // Success alert
    showAlert("Registration Successful!", "success");

    // Reset form
    form.reset();

    // Reload records
    loadRecords();
}

// ================================
// VALIDATE FORM
// ================================

function validateForm() {

    const email = document.getElementById("email").value.trim();
    const confirmEmail = document.getElementById("confirmEmail").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const grade = document.getElementById("grade").value.trim();

    const cgpa = document.getElementById("cgpa").value.trim();

    // Email validation
    if (!validateEmail(email)) {
        showAlert("Please enter a valid email address.", "error");
        return false;
    }

    // Confirm email validation
    if (email !== confirmEmail) {
        showAlert("Email addresses do not match.", "error");
        return false;
    }

    // Phone validation
    if (!validatePhoneNumber(phone)) {
        showAlert("Enter valid phone number (10 digits).", "error");
        return false;
    }

    // Grade validation
    if (!validateGrade(grade)) {
        showAlert("Grade must be A, B, C, D, E or F.", "error");
        return false;
    }

    // CGPA validation
    if (!validateCGPA(cgpa)) {
        showAlert("CGPA must be between 0 and 10.", "error");
        return false;
    }

    return true;
}

// ================================
// EMAIL VALIDATION
// ================================

function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}

// ================================
// PHONE VALIDATION
// ================================

function validatePhoneNumber(phone) {

    // Accepts 10 digit Indian mobile numbers
    const regex = /^[6-9]\d{9}$/;

    return regex.test(phone);
}

// ================================
// GRADE VALIDATION
// ================================

function validateGrade(grade) {

    const validGrades = ["A", "B", "C", "D", "E", "F"];

    return validGrades.includes(grade.toUpperCase());
}

// ================================
// CGPA VALIDATION
// ================================

function validateCGPA(cgpa) {

    const value = parseFloat(cgpa);

    return !isNaN(value) && value >= 0 && value <= 10;
}

// ================================
// LOAD RECORDS
// ================================

function loadRecords() {

    const recordsList = document.getElementById("recordsList");

    const records = JSON.parse(localStorage.getItem("records")) || [];

    // Clear existing records
    recordsList.innerHTML = "";

    // If no records
    if (records.length === 0) {

        recordsList.innerHTML = `
            <div class="empty-record">
                <h3>No Records Found</h3>
                <p>Student records will appear here.</p>
            </div>
        `;

        return;
    }

    // Display all records
    records.reverse().forEach((record, index) => {

        const recordElement = document.createElement("div");

        recordElement.classList.add("record-card");

        recordElement.innerHTML = `

            <div class="record-header">
                <h3>${record.firstName} ${record.lastName}</h3>
                <span>#${index + 1}</span>
            </div>

            <div class="record-body">

                <p><strong>DOB:</strong> ${record.dob}</p>

                <p><strong>Gender:</strong> ${record.gender}</p>

                <p><strong>Email:</strong> ${record.email}</p>

                <p><strong>Phone:</strong> ${record.phone}</p>

                <p><strong>Course:</strong> ${record.course}</p>

                <p><strong>Year:</strong> ${record.year}</p>

                <p><strong>Grade:</strong> ${record.grade}</p>

                <p><strong>CGPA:</strong> ${record.cgpa}</p>

                <p><strong>Registered:</strong> ${record.createdAt}</p>

            </div>

            <div class="record-buttons">

                <button class="delete-btn" onclick="deleteRecord(${record.id})">
                    Delete
                </button>

            </div>
        `;

        recordsList.appendChild(recordElement);
    });
}

// ================================
// DELETE RECORD
// ================================

function deleteRecord(id) {

    let records = JSON.parse(localStorage.getItem("records")) || [];

    // Filter out selected record
    records = records.filter(record => record.id !== id);

    // Save updated records
    localStorage.setItem("records", JSON.stringify(records));

    // Reload records
    loadRecords();

    showAlert("Record Deleted Successfully", "success");
}

// ================================
// CUSTOM ALERT
// ================================

function showAlert(message, type) {

    // Remove existing alert if any
    const existingAlert = document.querySelector(".custom-alert");

    if (existingAlert) {
        existingAlert.remove();
    }

    // Create alert div
    const alertBox = document.createElement("div");

    alertBox.className = `custom-alert ${type}`;

    alertBox.innerText = message;

    document.body.appendChild(alertBox);

    // Remove after 3 sec
    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}

function openRecordsPage(){
    window.open("records.html", "_blank");
}