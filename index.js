checkIfUserExists = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    if (!loggedInUser) {
        window.location.replace('./auth/Login/login.html')
        console.log(loggedInUser)
    }
}
goToQuiz = (e) => {
    window.location.replace('./Quiz/quiz.html')
    let attributeVal = e.getAttribute('data-quizzes')
    sessionStorage.setItem('quizNum', attributeVal)
}