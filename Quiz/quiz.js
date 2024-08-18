let questions = [
    [{
        question: "Which tag is used to define an image?",
        options: ["<img>", "<picture>", "<figure>", "None of the above"],
        correctAnswer: "<img>"
    },
    {
        question: "How do you create an unordered list in HTML?",
        options: ["<ol>", "<li>", "<ul>", "A & B both"],
        correctAnswer: "<ul>"
    },
    {
        question: "Which tag defines a table row?",
        options: ["<th>", "<tr>", "<td>", "None of the above"],
        correctAnswer: "<tr>"
    }, {
        question: "What tag is used to define a hyperlink in HTML?",
        options: ["<link>", "<href>", "<a>", "<hyper>"],
        correctAnswer: "<a>"
    }, {
        question: "Which tag creates the largest heading in HTML?",
        options: ["<h1>", "<h6>", "<header>", "<head>"],
        correctAnswer: "<h1>"
    },
    {
        question: "What is the purpose of the <br> tag?",
        options: ["Start a new paragraph", "Break Line", "Bold Text", "Create list"],
        correctAnswer: "Break Line"
    },
    {
        question: "How do you add an image to a webpage?",
        options: ["<img src='url'>", "<src='url'>", "<image='url'>", "<media src='url'>"],
        correctAnswer: "<img src='url'>"
    },
    {
        question: "Which HTML tag is used to define a table cell?",
        options: ["<table>", "<th>", "<tr>", "<td>"],
        correctAnswer: "<td>"
    },
    {
        question: " What does the <ul> tag represent?",
        options: ["Underlined list", "Ordered list", "Unordered list", "Universal list"],
        correctAnswer: "Unordered list"
    },
    {
        question: "Which tag is used to make text bold?",
        options: ["<strong>", "<bold>", "<b>", "<em>"],
        correctAnswer: "<b>"
    }],
    [
        {
            question: "What is the correct syntax for referring to an external style sheet?",
            options: [
                "<link rel='stylesheet' href='mystyle.css>",
                "<style src='mystyle.css'>",
                "<script src='mystyle.css'>",
                "None of the above"
            ],
            correctAnswer: "<link rel='stylesheet' href='mystyle.css>"
        },

        {
            question: "Which property is used to change the text color of an element?",
            options: ["color", "text-color", "font-color", "bgcolor"],
            correctAnswer: "color"
        },
        {
            question: "What is the correct syntax for adding a comment in CSS?",
            options: ["// This is a comment", "/* This is a comment */", " !-- This is a comment --!", "# This is a comment"],
            correctAnswer: "/* This is a comment */"
        },
        {
            question: "Which property is used to control the spacing between elements?",
            options: ["margin", "padding", "border", "spacing"],
            correctAnswer: "padding"
        },
        {
            question: "How do you apply a CSS style to all ",
            options: ["p { color: red; }", ".p { color: red; }", "#p { color: red; }", " *p { color: red; }"],
            correctAnswer: "p { color: red; }"
        },
        {
            question: "Which property is used to set the background color of an element?",
            options: ["background-color", "bg-color", "color", "page-color"],
            correctAnswer: "background-color"
        },
        {
            question: "What is the correct selector to style all elements with the class special'?",
            options: ["#special", ".special", "*special", "special"],
            correctAnswer: ".special"
        },
        {
            question: "How do you select an element with the ID 'header'?",
            options: ["#header", ".header", "*header", "header"],
            correctAnswer: ""
        },
        {
            question: "Which selector matches all <a> elements that have a title attribute?",
            options: ["a[title]", "a.title", "a#title", "a>title"],
            correctAnswer: "a[title]"
        },
        {
            question: "What is the default value of the position property?",
            options: ["static", "absolute", "relative", "fixed"],
            correctAnswer: "static"
        },
    ],
    [
        {
            question: "How to write an IF statement in JavaScript?",
            options: [
                "if(i==5)",
                "if i = 5",
                "if i = 5 then",
                "if i == 5 then"
            ],
            correctAnswer: "if(i==5)"
        },
        {
            question: "How does a for loop start?",
            options: [
                "for i = 1 to 10",
                "for(i=0; i<=10; i++)",
                "for(i <= 10; i++)",
                "for(i = 0; i<=10)"
            ],
            correctAnswer: "for(i=0; i<=10; i++)"
        },
        {
            question: "Which operator is used to assign a value to a variable?",
            options: ['==', '===', '+', '='],
            correctAnswer: '='
        },
        {
            question: "How can you add a comment in a JavaScript?",
            options: [
                "!--This is a comment-->",
                "'This is a comment'",
                "// This is a comment",
                "!* This is a comment*!"
            ],
            correctAnswer: "// This is a comment"
        }, {
            question: "Which event occurs when the user clicks on an HTML element?",
            options: [
                "onmouseover",
                "onclick",
                "onmouseclick",
                "onblur"
            ],
            correctAnswer: "onclick"
        },
        {
            question: "How does Java Script store dates in objects of Date type?",
            options: [
                "The number of days since January 1st, 1900",
                "The number of milliseconds since January 1st, 1970",
                "The number of seconds since January 1st, 1970",
                "The number of picoseconds since January 1st, 1970"
            ],
            correctAnswer: "The number of milliseconds since January 1st, 1970"
        },

        {
            question: "Which of the following is not a valid JavaScript variable name?",
            options: [
                "2java",
                "_java_and_java_names",
                "javaandjava",
                "None of the above"
            ],
            correctAnswer: "2java"
        },

        {
            question: "Which of the following is correct to write Hello World on the web page?",
            options: [
                'System.out.println("Hello World")',
                'document.write("Hello World")',
                'response.write("Hello World")',
                'print("Hello World")'
            ],
            correctAnswer: 'document.write("Hello World")'
        },
        {
            question: "How do you round the number 7.25, to the nearest integer?",
            options: [
                "Math.round(7.25)",
                "Math.rnd(7.25)",
                "round(7.25)",
                "rnd(7.25)"
            ],
            correctAnswer: "Math.round(7.25)"
        },
        {
            question: "Which of the following function of String object returns the character at the specified index",
            options: [
                "concat()",
                "charCodeAt()",
                "charAt()",
                "indexOf()"
            ],
            correctAnswer: "charAt()"
        }],

]


let index = 0;
let score = 0;
let questionsDiv = document.getElementById('questionsDiv')
let resultDiv = document.getElementById('resultDiv')
let question = document.getElementById('question')
let inputOptions = document.getElementsByName('options')
let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')
let option4 = document.getElementById('option4')
let nextBtn = document.getElementById('nextBtn')
let selectedQuizNum = parseInt(sessionStorage.getItem("quizNum"))
let minutes = 0;
let seconds = 60
let time = document.getElementById('time')
let resultQuestions = document.getElementById('showResultQuestions')
let questionCount = document.getElementById('question_count')
let getQuizHeading = document.getElementById('quizHeading')
let getPercentage = document.getElementById('percentage')
let getGrade = document.getElementById('grade')
let getScore = document.getElementById('score')
let usersSelectedAnswers = []


// when user changes tab during quiz
window.addEventListener('blur', () => {
    questionsDiv.style.display = "none"
    resultDiv.style.display = "block"
    resultDiv.innerHTML = `<div>
    <p class="unfair_text">Your quiz is cancelled because of unfair activity</p>
    <button class="login_btn" onclick="goToLoginPage()">Go to Login Page</button>
    </div>`
})


// quiz heading based on selected quiz
defineQuizHeading = () => {
    console.log(typeof selectedQuizNum)
    switch (selectedQuizNum) {
        case 0:
            getQuizHeading.innerHTML = "HTML QUIZ";
            break;
        case 1:
            getQuizHeading.innerHTML = "CSS QUIZ";
            break;
        case 2:
            getQuizHeading.innerHTML = "JAVASCRIPT QUIZ";
            break;
    }
}

defineQuizHeading()


// time for each question
let interval = setInterval(() => {
    seconds--
    time.innerText = `${minutes}:${seconds}`
    if (minutes < 10) {
        time.innerText = `0${minutes}:${seconds}`
    }
    if (seconds < 10) {
        time.innerText = `${minutes}:0${seconds}`
    }
    if (minutes < 10 && seconds < 10) {
        time.innerText = `0${minutes}:0${seconds}`
    }
    if (minutes === 0 && seconds === 0) {
        time.innerText = `01:00`
        seconds = 60
        usersSelectedAnswers.push("")
        nextQuestion()
    }
}, 1000)

nextQuestion = () => {

    for (let i = 0; i < inputOptions.length; i++) {
        if (inputOptions[i].checked) {
            checkAnswer(inputOptions[i].value)
        }
        nextBtn.disabled = true
        nextBtn.style.opacity = 0.6
        inputOptions[i].checked = false
    }

    if (index > questions[selectedQuizNum].length - 1) {
        clearInterval(interval)
        showResult()
    } else {
        questionCount.innerText = `Question ${index + 1} of ${questions[selectedQuizNum].length}`
        question.innerText = `${index + 1}. ${questions[selectedQuizNum][index].question}`
        option1.innerText = questions[selectedQuizNum][index].options[0]
        option2.innerText = questions[selectedQuizNum][index].options[1]
        option3.innerText = questions[selectedQuizNum][index].options[2]
        option4.innerText = questions[selectedQuizNum][index].options[3]
        index++;
        seconds = 60
        time.innerText = `01:00`
    }
}
nextQuestion()



// enabling next btn when user selects option
enableNextBtn = () => {
    nextBtn.disabled = false
    nextBtn.style.opacity = 1
}


// checking answer and incrementing score
checkAnswer = (value) => {
    let optionIndex = parseInt(value)
    let currentQuestion = questions[selectedQuizNum][index - 1]
    usersSelectedAnswers.push(currentQuestion.options[optionIndex])
    console.log(usersSelectedAnswers)
    if (currentQuestion.options[optionIndex] === currentQuestion.correctAnswer) {
        score += 10
    }
}

// encoding html entities so that the render on page
function encodeHTML(str) {
    return str.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// showing score, grade and percentage of user
showScoreGradePercentage = () => {
    getQuizHeading.innerText += " Result"
    getScore.innerText += ` Your got ${score} marks out of 100`
    getPercentage.innerText += ` ${score}%`

    if (score >= 80) {
        getGrade.innerText += " A+"
    }
    else if (score >= 70) {
        getGrade.innerText += " A"
    } else if (score >= 60) {
        getGrade.innerText += " B"
    } else if (score >= 50) {
        getGrade.innerText += " C"
    }
    else {
        getGrade.innerText += " Fail"
    }
}

// showing result when quiz ends
showResult = () => {
    questionsDiv.style.display = "none"
    resultDiv.style.display = "block"
    showScoreGradePercentage()
    for (let i = 0; i < questions[selectedQuizNum].length; i++) {

        resultQuestions.innerHTML += `<div class="result_question_div">
         <p class="result_question">${i + 1}. ${questions[selectedQuizNum][i].question}</p>
         <div>
        <p class="options">
                <span>A. </span>
                <span class="resultOptions_${i}">${encodeHTML(questions[selectedQuizNum][i].options[0])}</span>
        </p>
        </div>
        <div>
        <p class="options">
                <span>B. </span>
                <span class="resultOptions_${i}">${encodeHTML(questions[selectedQuizNum][i].options[1])}</span>
        </p>
                </div>
        <div>
        <p class="options">
                <span>C. </span>
                <span class="resultOptions_${i}">${encodeHTML(questions[selectedQuizNum][i].options[2])}</span>
        </p>
        </label>
        </div>
        <div>
        <p class="options">
                <span>D. </span>
                <span class="resultOptions_${i}">${encodeHTML(questions[selectedQuizNum][i].options[3])}</span>
        </p>
        </div>
        <p class="checkAnswerText checkRightOrWrong_${i}"></p>
        </div>`
        let getOptions = document.getElementsByClassName(`resultOptions_${i}`)
        let correctionOption = document.getElementsByClassName(`checkRightOrWrong_${i}`)
        checkCorrectAnswer(getOptions, correctionOption, i)
    }
}

// cheking right, wrong answer and and showing on result
checkCorrectAnswer = (options, correctionOption, currentQuestionIndex) => {
    console.log(correctionOption)
    for (let i = 0; i < options.length; i++) {
        let userSelectedOption = options[i].innerText
        let answerIfCorrect = false
        let currentQuestion = questions[selectedQuizNum][currentQuestionIndex].correctAnswer
        if (usersSelectedAnswers[currentQuestionIndex] === "") {
            correctionOption[0].innerText = `Correct Answer: ${currentQuestion}`
        }
        if (options[i].innerText === usersSelectedAnswers[currentQuestionIndex]) {
            if (userSelectedOption === currentQuestion) {
                answerIfCorrect = true
                options[i].parentElement.parentElement.style.backgroundColor = "lightgreen"
                correctionOption[0].innerText = "Your answer is correct"
            }
            if (!answerIfCorrect) {
                options[i].parentElement.parentElement.style.backgroundColor = "#ffb3b3"
                correctionOption[0].innerText = `Correct Answer: ${currentQuestion}`
            }
        }
    }
}

// login page button
goToLoginPage = () => {
    window.location.replace("../auth/Login/login.html")
}

