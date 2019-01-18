// eslint-disable-next-line
function greet() {

    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    var greeting = 'Hello ' + firstName + ' ' + lastName + '!';
    
    // display greeting
    var greeter = document.getElementById('greeter');
    greeter.textContent = greeting;
    
    // remove prompt?
}

//TODO: validate name inputs
//TODO: clear inputs agter greet?
