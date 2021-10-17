// function prevent sending the form on submit button
function checkForm(evt) {
    evt.preventDefault()
}


// turn on submit button if checkbox ticked
function disabledSubmit() {
    if(agree.checked) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
};


// // checking validation of the fields
// function checkFirstNameInput() {
//     let nameInput = document.getElementById("first_name") 
//     let errorDiv = document.getElementById("first_error")
//     if (!nameInput.checkValidity()) {
//         errorDiv.innerText = nameInput.validationMessage
//     } else {
//         // clear the message if it is valid
//         errorDiv.innerText = " "
//     }
// }

// function checkLastNameInput() {
//     let lnameInput = document.getElementById("last_name") 
//     let errorDiv = document.getElementById("last_error")
    
//     if (!lnameInput.checkValidity()) {
//         errorDiv.innerText = lnameInput.validationMessage
//     } else {
//         // clear the message if it is valid
//         errorDiv.innerText = " "
//     }
// }

// function checkEmailInput() {
//     let emailInput = document.getElementById("email") 
//     let errorDiv = document.getElementById("email_error")
    
//     if (!emailInput.checkValidity()) {
//         errorDiv.innerText = emailInput.validationMessage
//     } else {
//         // clear the message if it is valid
//         errorDiv.innerText = " "
//     }
// }

// function checkDateInput() {
//     let dobInput = document.getElementById("birthday")
//     let errorDiv = document.getElementById("date_error")
    
//     if (!dobInput.checkValidity()) {
//         errorDiv.innerText = dobInput.validationMessage
//     } else {
//         // clear the message if it is valid
//         errorDiv.innerText = " "
//     }
// }

