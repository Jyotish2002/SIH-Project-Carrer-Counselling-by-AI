document.getElementById('save-btn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    
    alert(`Saved: \nName: ${name}\nPhone Number: ${number}\nEmail: ${email}`);
});

document.getElementById('help-btn').addEventListener('click', function() {
    alert('A counselor will contact you soon!');
});
