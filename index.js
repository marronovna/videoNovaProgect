function showPassword() {
  let passwordInput = document.getElementById("p_i");
  let passwordEyeLine = document.getElementById("eyeline");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordEyeLine.style.display = "none";
  } else {
    passwordInput.type = "password";
    passwordEyeLine.style.display = "block";
  }
}

function showRepeatPassword() {
  let repeatPasswordInput = document.getElementById("repeat_p_i");
  let repeatPasswordEyeLine = document.getElementById("repeat_eyeline");

  if (repeatPasswordInput.type === "password") {
    repeatPasswordInput.type = "text";
    repeatPasswordEyeLine.style.display = "none";
  } else {
    repeatPasswordInput.type = "password";
    repeatPasswordEyeLine.style.display = "block";
  }
}
