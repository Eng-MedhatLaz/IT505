function handleLogin() {
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  if (!u || !p) {
    alert("Please enter both username and password.");
    return;
  }
  alert("Login successful! Welcome, " + u + ".");
}
