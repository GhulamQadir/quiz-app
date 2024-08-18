let signedUpUsers = []
let email = document.getElementById('email')
let password = document.getElementById('password')
let alertErrorDiv = document.getElementById('alert')
let closeAlertBtn = document.getElementById('closebtn')
let errorMessage = document.getElementById('error_message')
let loader = document.getElementById('loader')
let loginFormDiv = document.getElementById('loginFormDiv')

// getting signedUp users
getUsers = () => {
    let getSignUpUsers = JSON.parse(localStorage.getItem('signedUpUsers'))
    if (getSignUpUsers) {
        signedUpUsers = getSignUpUsers
        console.log(signedUpUsers)

    } else {
        signedUpUsers = []
    }
}
getUsers()


// login functionality
login = (event) => {
    event.preventDefault()

    if (email.value === "") {
        email.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your email address"
        return;
    }
    if (password.value === "") {
        password.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your password"
        return;
    }

    if (signedUpUsers.length > 0) {
        for (let i = 0; i < signedUpUsers.length; i++) {
            if (signedUpUsers[i].email !== email.value) {
                loader.style.display = "block"
                setTimeout(() => {
                    loginFormDiv.style.pointerEvents = "auto"
                    loader.style.display = "none"
                    alertErrorDiv.style.display = "block"
                    errorMessage.innerHTML = "There is no user registered with this email"
                    email.focus()
                }, 2000)
            }
            else if (signedUpUsers[i].email === email.value && signedUpUsers[i].password !== password.value) {
                loader.style.display = "block"
                setTimeout(() => {
                    loginFormDiv.style.pointerEvents = "auto"
                    loader.style.display = "none"
                    alertErrorDiv.style.display = "block"
                    errorMessage.innerHTML = "Wrong password"
                    email.focus()
                }, 2000)
            }
            if (signedUpUsers[i].email === email.value && signedUpUsers[i].password === password.value) {
                userFound = true
                loader.style.display = "block"
                setTimeout(() => {
                    loginFormDiv.style.pointerEvents = "auto"
                    loader.style.display = "none"
                    console.log("user found")
                    localStorage.setItem("loggedInUser", JSON.stringify({ email: email.value, password: password.value }))
                    window.location.replace('../../index.html')
                    email.value = ""
                    password.value = ""
                }, 2000)
            }
        }
    }
    else {
        loader.style.display = "block"
        setTimeout(() => {
            loginFormDiv.style.pointerEvents = "auto"
            loader.style.display = "none"
            alertErrorDiv.style.display = "block"
            errorMessage.innerHTML = "There is no user registered with this email"
            email.focus()
        }, 2000)
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
