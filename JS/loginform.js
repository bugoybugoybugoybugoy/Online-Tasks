document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const pinInput = document.getElementById("pin");
    const rememberMeCheckbox = document.getElementById("rememberMe");

    const adminUsername = "admin";
    const adminPin = "1234";

    if (localStorage.getItem("rememberedUser")) {
        usernameInput.value = localStorage.getItem("rememberedUser");
        rememberMeCheckbox.checked = true;
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const enteredUsername = usernameInput.value.trim();
        const enteredPin = pinInput.value.trim();

        if (enteredUsername === adminUsername && enteredPin === adminPin) {
            if (rememberMeCheckbox.checked) {
                localStorage.setItem("rememberedUser", enteredUsername);
            } else {
                localStorage.removeItem("rememberedUser");
            }

            setTimeout(() => {
                window.location.href = "./PAGES/homepage.html";
            }, 500);
        } else {
            showErrorMessage("Invalid username or PIN. Please try again.");
        }
    });

    function showErrorMessage(message) {
        let errorMsg = document.getElementById("error-msg");
        if (!errorMsg) {
            errorMsg = document.createElement("p");
            errorMsg.id = "error-msg";
            errorMsg.style.color = "red";
            errorMsg.style.marginTop = "10px";
            loginForm.appendChild(errorMsg);
        }
        errorMsg.textContent = message;
    }
});
