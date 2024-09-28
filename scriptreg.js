document.addEventListener('DOMContentLoaded', () => {
    // Load saved records on page load
    loadRecords();
});

function submitForm() {
    const form = document.getElementById('registrationForm');
    const formData = new FormData(form);

    // Validate form
    if (!validateForm()) {
        return;
    }document.addEventListener('DOMContentLoaded', () => { 
        // Load saved records on page load
        loadRecords();
    });
    
    function submitForm() {
        const form = document.getElementById('registrationForm');
        const formData = new FormData(form);
    
        // Validate form
        if (!validateForm()) {
            return;
        }
    
        // Create a record object
        const record = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            dob: formData.get('dob'),
            gender: formData.get('gender'),
            email: formData.get('email'),
            confirmEmail: formData.get('confirmEmail'),
            phone: formData.get('phone'),
            course: formData.get('course'),
            year: formData.get('year'),
            grade: formData.get('grade'),
            cgpa: formData.get('cgpa'),
            // File handling is not covered here, but you can add it if needed
        };
    
        // Save the record to localStorage
        let records = JSON.parse(localStorage.getItem('records')) || [];
        records.push(record);
        localStorage.setItem('records', JSON.stringify(records));
    
        // Reset the form and reload records
        form.reset();
        loadRecords();
    }
    
    function validateForm() {
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirmEmail').value; // Get the confirm email value
        const phone = document.getElementById('phone').value;
        const grade = document.getElementById('grade').value;
    
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
    
        if (email !== confirmEmail) { // Check if emails match
            alert('Email does not match.');
            return false;
        }
    
        if (!validatePhoneNumber(phone)) {
            alert('Please enter a valid phone number (e.g., 123-456-7890).');
            return false;
        }
    
        if (!validateGrade(grade)) {
            alert('Please enter a valid grade (e.g., A, B, C).');
            return false;
        }
    
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
    
    function loadRecords() {
        const recordsList = document.getElementById('recordsList');
        const records = JSON.parse(localStorage.getItem('records')) || [];
    
        recordsList.innerHTML = ''; // Clear existing records
    
        records.forEach((record, index) => {
            const recordElement = document.createElement('div');
            recordElement.classList.add('record');
            recordElement.innerHTML = `
                <h3>Record ${index + 1}</h3>
                <p><strong>First Name:</strong> ${record.firstName}</p>
                <p><strong>Last Name:</strong> ${record.lastName}</p>
                <p><strong>Date of Birth:</strong> ${record.dob}</p>
                <p><strong>Gender:</strong> ${record.gender}</p>
                <p><strong>Email:</strong> ${record.email}</p>
                <p><strong>Phone:</strong> ${record.phone}</p>
                <p><strong>Course:</strong> ${record.course}</p>
                <p><strong>Year:</strong> ${record.year}</p>
                <p><strong>Grade:</strong> ${record.grade}</p>
            `;
            recordsList.appendChild(recordElement);
        });
    }
    

    // Create a record object
    const record = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        dob: formData.get('dob'),
        gender: formData.get('gender'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        course: formData.get('course'),
        year: formData.get('year'),
        grade: formData.get('grade'),
        // File handling is not covered here, but you can add it if needed
    };

    // Save the record to localStorage
    let records = JSON.parse(localStorage.getItem('records')) || [];
    records.push(record);
    localStorage.setItem('records', JSON.stringify(records));

    // Reset the form and reload records
    form.reset();
    loadRecords();
}

function validateForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const grade = document.getElementById('grade').value;
    const cgpa = document.getElementById('cgpa').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!validatePhoneNumber(phone)) {
        alert('Please enter a valid phone number (e.g., 123-456-7890).');
        return false;
    }

    if (!validateGrade(grade)) {
        alert('Please enter a valid grade (e.g., A, B, C).');
        return false;
    }

    if (!validateCGPA(cgpa)) {
        alert('Please enter a valid CGPA (e.g., 3.5, 4.0,8,7).');
        return false;
    }

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

function validateCGPA(cgpa) {
    const regex = /^(?:[0-9](?:\.\d{1,2})? | 10(?:\.0{1,2})?)$/; // Adjust range as needed
    return regex.test(cgpa);
}
function loadRecords() {
    const recordsList = document.getElementById('recordsList');
    const records = JSON.parse(localStorage.getItem('records')) || [];

    recordsList.innerHTML = ''; // Clear existing records

    records.forEach((record, index) => {
        const recordElement = document.createElement('div');
        recordElement.classList.add('record');
        recordElement.innerHTML = `
            <h3>Record ${index + 1}</h3>
            <p><strong>First Name:</strong> ${record.firstName}</p>
            <p><strong>Last Name:</strong> ${record.lastName}</p>
            <p><strong>Date of Birth:</strong> ${record.dob}</p>
            <p><strong>Gender:</strong> ${record.gender}</p>
            <p><strong>Email:</strong> ${record.email}</p>
            <p><strong>Phone:</strong> ${record.phone}</p>
            <p><strong>Course:</strong> ${record.course}</p>
            <p><strong>Year:</strong> ${record.year}</p>
            <p><strong>Grade:</strong> ${record.grade}</p>
            <p><strong>CGPA:</strong>${record.cgpa}</p>
        `;
        recordsList.appendChild(recordElement);
    });
}