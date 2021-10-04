const password = document.getElementById("pass");
const rePassword = document.getElementById("re-pass");
const eye = document.getElementById("eye-btn");

let type = "password";

eye.addEventListener("click", function () {
    if (type == "password") {
        password.setAttribute("type", "text");

        eye.classList.replace("bi-eye", "bi-eye-slash");

        type = "text";
    } else if (type == "text") {
        password.setAttribute("type", "password");

        eye.classList.replace("bi-eye-slash", "bi-eye");

        type = "password";
    }
})

password.addEventListener("keyup", function () {
    rePassword.value = password.value

    console.log(password.value);
})

// function showPassword() {
//     if (type == "password") {
//         password.setAttribute("type", "text");

//         eyeIcon.classList.replace("bi-eye", "bi-eye-slash");

//         type = "text";
//     } else if (type == "text") {
//         password.setAttribute("type", "password");

//         eyeIcon.classList.replace("bi-eye-slash", "bi-eye");

//         type = "password";
//     }
// }

const setMenuBtn = document.getElementById("set-btn");
const setMenu = document.getElementById("set-menu");

setMenuBtn.addEventListener("click", function () {
    setMenu.classList.toggle("setting-menu");
})

const profileLink = document.getElementById("profile");
const passwordLink = document.getElementById("password");
const setProfile = document.getElementById("set-profile");
const setPass = document.getElementById("set-password");

profileLink.addEventListener("click", function (e) {
    e.preventDefault();

    setProfile.classList.remove("hidden");
    setPass.classList.add("hidden");
})

passwordLink.addEventListener("click", function (e) {
    e.preventDefault();

    setProfile.classList.add("hidden");
    setPass.classList.remove("hidden");
})