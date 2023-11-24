//your JS code here. If required.
function submitform();{
	const firstName = document.getElementById('FN').value;
    const lastName = document.getElementById('LN').value;
    const phoneNumber = document.getElementById('fno').value;
    const emailID = document.getElementById('ei').value;
	
	const alertMessage = "First Name: " + firstName + "\n" +
                         "Last Name: " + lastName + "\n" +
                         "Phone Number: " + phoneNumber + "\n" +
                         "Email ID: " + emailID;

    alert(alertMessage);
}