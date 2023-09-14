const form = document.querySelector("form");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email + .error");

const country = document.querySelector("#country");
const zipCode = document.querySelector("#zip");
const zipCodeError = document.querySelector("#zip + .error");

const password = document.querySelector("#pass");
const passwordError = document.querySelector("#pass + .error");

const confirmPassword = document.querySelector("#confPass");
const confirmPasswordError = document.querySelector("#confPass + .error");

email.addEventListener("input", function(){
    if (email.validity.valid){
        emailError.textContent = "";
        email.style.borderColor = "green";
    } else emailErrorHandler();
})

zipCode.addEventListener("input", function(){
    if(country.value === "India"){
        zipCode.setAttribute("pattern", "[0-9]{6}|[0-9]{3}\s[0-9]{3}");
    } else if (country.value === "Afghanistan" || country.value === "Bangladesh"){
        zipCode.setAttribute("pattern", "[0-9]{4}");
    } else {
        zipCode.setAttribute("pattern", "[0-9]{5}");
    }

    if (zipCode.validity.valid){
        zipCodeError.textContent = "";
        zipCode.style.borderColor = "green";
    } else zipCodeErrorHandler();
})

password.addEventListener("input", function(){
    if (password.validity.valid){
        passwordError.textContent = "";
        password.style.borderColor = "green";
    } else passwordErrorHandler();
})

confirmPassword.addEventListener("input", function(){
    if (confirmPassword.value === password.value){
        confirmPasswordError.textContent = "";
        confirmPassword.style.borderColor = "green";
    } else confirmPasswordErrorHandler();
})

form.addEventListener("submit", function(event){
    if(!email.validity.valid){
        emailErrorHandler();
        event.preventDefault();
    }

    if(!zipCode.validity.valid){
        zipCodeErrorHandler();
        event.preventDefault();
    }

    if(!password.validity.valid){
        passwordErrorHandler();
        event.preventDefault();

    } else {
        confirmPasswordErrorHandler();
        event.preventDefault();

    }
})

function emailErrorHandler(){
    if (email.validity.valueMissing){
        emailError.textContent = "Email cannot be empty";
    } else if (email.validity.typeMismatch){
        emailError.textContent = "Entered Value needs to be an email";
    }
    email.style.borderColor = "red";
}

function zipCodeErrorHandler(){
    if (zipCode.validity.valueMissing){
        zipCodeError.textContent = "Zip Code cannot be empty";
    } else if (zipCode.validity.patternMismatch){
        zipCodeError.textContent = `Use Correct Zip Code format of ${country.value}`
    }
    zipCode.style.borderColor = "red";
}

function passwordErrorHandler(){
    if (password.validity.valueMissing){
        passwordError.textContent = "Password cannot be empty";
    } else if (password.validity.patternMismatch){
        passwordError.textContent = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
    }
    password.style.borderColor = "red";
}

function confirmPasswordErrorHandler(){
    if(confirmPassword.validity.valueMissing){
        confirmPasswordError.textContent = "Confirm Password cannot be empty";
    } else if (confirmPassword.value !== password.value){
        confirmPasswordError.textContent = "Both Passwords must match";
    }
    confirmPasswordError.style.borderColor = "red";
}