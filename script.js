//your JS code here. If required.
function submitForm() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;

    // Display alert with form information
    const alertMessage = "First Name: " + firstName + "\n" +
                         "Last Name: " + lastName + "\n" +
                         "Phone Number: " + phoneNumber + "\n" +
                         "Email ID: " + email;

    alert(alertMessage);
}