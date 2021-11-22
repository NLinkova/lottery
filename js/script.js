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
}
