const eyeButton = document.getElementById("eye-btn");
const eyeIcon = document.querySelector(".bi-eye")
const password = document.getElementById("user-pass");
let type = "password";

eyeButton.addEventListener("click", showPassword);

function showPassword() {
    if (type == "password") {
        password.setAttribute("type", "text");

        eyeIcon.classList.replace("bi-eye", "bi-eye-slash");

        type = "text";
    } else if (type == "text") {
        password.setAttribute("type", "password");

        eyeIcon.classList.replace("bi-eye-slash", "bi-eye");

        type = "password";
    }
}

const forgotBtn = document.getElementById("forgot-btn");
const modalPass = document.getElementById("forgot");

forgotBtn.addEventListener("click", function () {
    modalPass.classList.toggle("forgot");

    forgotBtn.classList.toggle("text-ref");
})