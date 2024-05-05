
document.addEventListener("DOMContentLoaded", function () {

    //------------------------- Registration form submission -------------------------
    document.querySelector(".form-box.register form").addEventListener("submit", function (event) { 

        event.preventDefault();
        const username = document.querySelector('.form-box.register input[placeholder="Username"]').value;
        const email = document.querySelector('.form-box.register input[placeholder="Email"]').value;
        const password = document.querySelector('.form-box.register input[placeholder="Password"]').value;
        const securityQuestion = document.querySelector(".form-box.register select#question").value;
        const answer = document.querySelector('.form-box.register input[placeholder="Answer"]').value;

        if (!validateUsername(username)) {
            alert("Error: Username is not valid. It should start with a letter and not contain special characters.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Error: Email is not valid.");
            return;
        }

        if (!validatePassword(password)) {
            alert("Error: Password is not valid. It should be at least 8 characters long and contain at least one digit.");
            return;
        }

        if (!validateAnswer(answer)) {
            alert("Error: Answer is not valid. It should not contain numbers or special characters.");
            return;
        }

        if (findUserByUsername(username)) {
            alert("Error: Username already exists. Please choose a different username.");
        } else {
            addUser(username, email, password, securityQuestion, answer);
            alert("Registration successful! You can now login.");
        }
    });

    //------------------------- Login form submission -------------------------
    document.querySelector(".form-box.Login form").addEventListener("submit", function (event) {

        event.preventDefault();
        const loginUsername = document.querySelector('.form-box.Login input[placeholder="Username"]').value;
        const loginPassword = document.querySelector('.form-box.Login input[placeholder="Password"]').value;

        if (!validateUsername(loginUsername)) {
            alert("Error: Username is not valid. It should start with a letter and not contain special characters.");
            return;
        }

        const user = findUser(loginUsername, loginPassword);

        if (user) {
            document.location.href ="home.html";
            document.getElementById("login").innerHTML = username;
        } else {
            alert("Login failed. Please check your username and password.");
        }
    });

    // ------------------------- Forgot Password form submission -------------------------
    document.querySelector(".form-box.forgot-password form").addEventListener("submit", function (event) {

        event.preventDefault();
        const forgotPasswordUsername = document.querySelector('.form-box.forgot-password input[placeholder="Username"]').value;
        const securityQuestion = document.querySelector(".form-box.forgot-password select#question").value;
        const answer = document.querySelector('.form-box.forgot-password input[placeholder="Answer"]').value;
        const newPassword = document.querySelector('.form-box.forgot-password input[placeholder="New Password"]').value;

        if (!validateUsername(forgotPasswordUsername)) {
            alert("Error: Username is not valid. It should start with a letter and not contain special characters.");
            return;
        }

        if (!validatePassword(newPassword)) {
            alert("Error: Password is not valid. It should be at least 8 characters long and contain at least one digit.");
            return;
        }

        const user = findUserByUsername(forgotPasswordUsername);

        if (
            user &&
            user.securityQuestion === securityQuestion &&
            user.answer.toLowerCase() === answer.toLowerCase()
        ) {
            resetPassword(forgotPasswordUsername, newPassword);
        } else {
            alert("Password reset failed. Please check your username, security question, and answer.");
        }
    });

    //------------------------- Default users -------------------------
    const users = [
        {
            username: "Abdullah",
            email: "Abdullah@gmail.com",
            password: "Abdullah123",
            securityQuestion: "team",
            answer: "alhilal",
        },
        {
            username: "mohammed",
            email: "mohammed@hotmail.com",
            password: "abc123123",
            securityQuestion: "color",
            answer: "blue",
        },
        {
            username: "ali",
            email: "ali@gmail.com",
            password: "ali123321",
            securityQuestion: "car",
            answer: "gmc",
        },
    ];

    //------------------------- add user -------------------------
    function addUser(username, email, password, securityQuestion, answer) {
        users.push({
            username: username,
            email: email,
            password: password,
            securityQuestion: securityQuestion,
            answer: answer,
        });
    }

    //------------------------- Check if user exist -------------------------
    function findUserByUsername(username) {
        return users.find((user) => user.username === username);
    }

    //------------------------- find user For login-------------------------
    function findUser(username, password) {
        return users.find(
            (user) => user.username === username && user.password === password
        );
    }

    //------------------------- reset password-------------------------
    
    function resetPassword(username, newPassword) {
        const user = findUserByUsername(username);

        if (user) {
            user.password = newPassword;
            alert("Password reset successful! You can now login with your new password.");
        } else {
            alert("Password reset failed. User not found.");
        }
    }

    //------------------------- check email validation-------------------------
    function validateEmail(email) {
        const emailPattern =/^[A-Za-z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com|aol\.com|hotmail\.co\.uk|hotmail\.fr|msn\.com|yahoo\.fr|wanadoo\.fr|orange\.fr|comcast\.net|yahoo\.co\.uk|yahoo\.com\.br|yahoo\.co\.in|live\.com|rediffmail\.com|free\.fr|gmx\.de|web\.de|yandex\.ru|ymail\.com|libero\.it|outlook\.com|uol\.com\.br|bol\.com\.br|mail\.ru|cox\.net|hotmail\.it|sbcglobal\.net|sfr\.fr|live\.fr|verizon\.net|live\.co\.uk|googlemail\.com|yahoo\.es|ig\.com\.br|live\.nl|bigpond\.com|terra\.com\.br|yahoo\.it|neuf\.fr|yahoo\.de|alice\.it|rocketmail\.com|att\.net|laposte\.net|facebook\.com|bellsouth\.net|yahoo\.in|hotmail\.es|charter\.net|yahoo\.ca|yahoo\.com\.au|rambler\.ru|hotmail\.de|tiscali\.it|shaw\.ca|yahoo\.co\.jp|sky\.com|earthlink\.net|optonline\.net|freenet\.de|t-online\.de|aliceadsl\.fr|virgilio\.it|home\.nl|qq\.com|telenet\.be|me\.com|yahoo\.com\.ar|tiscali\.co\.uk|yahoo\.com\.mx|voila\.fr|gmx\.net|mail\.com|planet\.nl|tin\.it|live\.it|ntlworld\.com|arcor\.de|yahoo\.co\.id|frontiernet\.net|hetnet\.nl|live\.com\.au|yahoo\.com\.sg|zonnet\.nl|club-internet\.fr|juno\.com|optusnet\.com\.au|blueyonder\.co\.uk|bluewin\.ch|skynet\.be|sympatico\.ca|windstream\.net|mac\.com|centurytel\.net|chello\.nl|live\.ca|aim\.com|bigpond\.net\.au)$/;
        return emailPattern.test(email);
    }

    //------------------------- check password validation-------------------------
    function validatePassword(password) {
        return /^(?=.*[0-9])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    }

    //------------------------- check username validation-------------------------
    function validateUsername(username) {
        return /^[A-Za-z][A-Za-z0-9]*$/.test(username);
    }

    //------------------------- check answer validation-------------------------
    function validateAnswer(answer) {
        return /^[A-Za-z\s]+$/.test(answer);
    }

});