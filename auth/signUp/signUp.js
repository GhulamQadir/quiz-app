let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let alertErrorDiv = document.getElementById('alert')
let closeAlertBtn = document.getElementById('closebtn')
let errorMessage = document.getElementById('error_message')
let loader = document.getElementById('loader')
let signUpFormDiv = document.getElementById('signUpFormDiv')
let signedUpUsers = []


// getting signed up users
getUsers = () => {
    let getSignUpUsers = JSON.parse(localStorage.getItem('signedUpUsers'))
    if (getSignUpUsers) {
        signedUpUsers = getSignUpUsers
    } else {
        signedUpUsers = []
    }
}
getUsers()

// contructor function for adding user in users list
function User(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password
}

// signup functionality
signUp = (event) => {
    event.preventDefault();
    let userAlreadyExists = false;

    // Regex for Email and password Validation
    let emailPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    let passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");

    // Form Validation
    if (firstName.value === "") {
        firstName.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your first name"
        return;
    }
    else if (firstName.value.length < 3) {
        firstName.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Your first name is too short"
        return;
    }
    if (lastName.value === "") {
        lastName.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your last name"
        return;
    }
    else if (lastName.value.length < 2) {
        lastName.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Your last name is too short"
        return;
    }
    if (email.value === "") {
        email.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your email address"
        return;
    }
    else if (!(email.value.match(emailPattern))) {
        email.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your valid email address"
        return;
    }
    if (password.value === "") {
        password.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your password"
        return;
    }
    else if (!(password.value.match(passwordPattern))) {
        password.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your valid password"
        return;
    }

    // Checking User's Credentials if already registered
    else {
        for (let i = 0; i < signedUpUsers.length; i++) {
            if (signedUpUsers[i].email === email.value) {
                userAlreadyExists = true
                loader.style.display = "block"
                setTimeout(() => {
                    signUpFormDiv.style.pointerEvents = "auto"
                    loader.style.display = "none"
                    alertErrorDiv.style.display = "block"
                    errorMessage.innerHTML = "The email address is already in use by another account"
                    email.focus()
                }, 2000)
                return;
            }
        }
        if (!userAlreadyExists) {
            signUpFormDiv.style.pointerEvents = "none"
            loader.style.display = "block"
            setTimeout(() => {
                loader.style.display = "none"
                signedUpUsers.push(new User(firstName.value, lastName.value, email.value, password.value))
                localStorage.setItem("signedUpUsers", JSON.stringify(signedUpUsers))
                window.location.replace('../Login/login.html')
                firstName.value = ""
                lastName.value = ""
                email.value = ""
                password.value = ""
            }, 2000)

        }
    }
}
// Show and Hide password checkBox
function showAndHidePassword() {
    var getPassword = document.getElementById("password");
    if (getPassword.type === "password") {
        getPassword.type = "text";
    } else {
        getPassword.type = "password";
    }
}



// close error alert function
closeErrorAlert = () => {
    alertErrorDiv.style.opacity = "0"
    setTimeout(() => {
        alertErrorDiv.style.opacity = "1"
        alertErrorDiv.style.display = "none"
    }, 600)

}
