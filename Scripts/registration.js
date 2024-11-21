// #region Navigating to and from Form Screen
function navigateToForm() {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('form-screen').style.display = 'block';
}

function navigateToHome() {
    document.getElementById('form-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
}

//#endregion


// #region Collecting User Data
document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const address = document.getElementById('address').value;

    // Prepare the data payload
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        address: address
    };

    try {
        // Send data to the API
        const response = await fetch('http://localhost:5000/api/User', { // Adjust the URL to match your API
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            const result = await response.json();
            alert('User registered successfully!');
            console.log('Server response:', result);
        } else {
            alert('Failed to register user.');
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
});
//#endregion collecting data end