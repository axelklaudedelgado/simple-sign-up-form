function checkValidity () {
    if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity("");
    } else {
        confirmPassword.setCustomValidity("Passwords do not match!");
    }
}

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

confirmPassword.addEventListener("input", checkValidity);