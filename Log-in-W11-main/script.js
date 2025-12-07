let emailInput = document.getElementById("email");
let emailLabel = document.getElementById("Email");

let passwordInput = document.getElementById("password");
let passwordLabel = document.getElementById("Password");

emailInput.addEventListener("focus", () => {
  emailLabel.style.transition = "transform 0.3s ease"
  emailLabel.style.transform = "translateY(-20px)";
});
emailInput.addEventListener("blur", () => {
  if (!emailInput.value) {
    emailLabel.style.transition = "transform 0.3s ease"
    emailLabel.style.transform = "translateY(0)";
  }
});

passwordInput.addEventListener("focus", () => {
  passwordLabel.style.transition = "transform 0.3s ease"
  passwordLabel.style.transform = "translateY(-20px)";
});
passwordInput.addEventListener("blur", () => {
  if (!passwordInput.value) {
    passwordLabel.style.transition = "transform 0.3s ease"
    passwordLabel.style.transform = "translateY(0)";
  }
});
