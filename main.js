// eslint-disable-next-line
function greet() {

    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    // make the greeting
    
    var greeting = 'Hello ' + firstName + ' ' + lastName + ' !';
    
    console.log(greeting);

    // display greeting

    // remove prompt?
}

//TODO: validate name inputs
//TODO: clear inputs agter greet?



greet();