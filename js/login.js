document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("loginMessage");

  // Validation with if statements
  if (password.length < 8) {
    message.style.color = "red";
    message.textContent = "Password must be at least 8 characters long.";
    return;
  }

  if (password.toLowerCase() === "password") {
    message.style.color = "red";
    message.textContent = "Password cannot be 'password'. Choose something secure.";
    return;
  }

  // Regex for secure password (at least 1 letter and 1 number)
  let secureFormat = /^(?=.*[A-Za-z])(?=.*\d).+$/;
  if (!secureFormat.test(password)) {
    message.style.color = "red";
    message.textContent = "Password must contain both letters and numbers.";
    return;
  }

  // Simulate successful login
  message.style.color = "green";
  message.textContent = "Login successful! Welcome, " + username + ".";

  // Save session in localStorage
  localStorage.setItem("loggedInUser", username);

  // Redirect to homepage after 2 seconds
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});

