// Save the student profile data to localStorage
document.getElementById('save-btn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;

    // Save the profile data in localStorage
    localStorage.setItem('studentName', name);
    localStorage.setItem('studentNumber', number);
    localStorage.setItem('studentEmail', email);

    // Show a confirmation message
    alert(`Saved: \nName: ${name}\nPhone Number: ${number}\nEmail: ${email}`);
});

// Load the saved profile data when the page loads
window.onload = function() {
    // Retrieve data from localStorage
    const storedName = localStorage.getItem('studentName');
    const storedNumber = localStorage.getItem('studentNumber');
    const storedEmail = localStorage.getItem('studentEmail');

    // If data exists, populate the form with the saved data
    if (storedName) {
        document.getElementById('name').value = storedName;
        document.getElementById('welcome-message').textContent = `Welcome to CareerNavigator, ${storedName}`;
    }
    if (storedNumber) document.getElementById('number').value = storedNumber;
    if (storedEmail) document.getElementById('email').value = storedEmail;
};

// Handle help request action
document.getElementById('help-btn').addEventListener('click', function() {
    alert('A counselor will contact you soon!');
});
