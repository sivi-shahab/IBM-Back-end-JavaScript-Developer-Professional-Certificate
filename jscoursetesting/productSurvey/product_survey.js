function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const submitButton = document.getElementById('submitBtn');

    alert('Thank you for your valuable feedback');

    // Display submitted data
    document.getElementById('userName').innerText = username;
    document.getElementById('userAge').innerText = age;
    document.getElementById('userEmail').innerText = email;
    document.getElementById('userJob').innerText = job;
    document.getElementById('userDesignation').innerText = designation;
    document.getElementById('userProductChoice').innerText = productType;
    document.getElementById('userFeedback').innerText = feedback;

    document.getElementById('userInfo').style.display = 'block';

    // Clear input fields after submission
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
    document.getElementById('job').value = '';
    document.getElementById('designation').value = '';
    document.getElementById('productType').value = '';
    document.getElementById('feedbackText').value = '';
}

// Attach the click event once
document.getElementById('submitBtn').onclick = submitFeedback;

// Optional: Trigger submit on pressing "Enter"
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
