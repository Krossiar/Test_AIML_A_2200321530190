function login() {
    event.preventDefault();
    const username = document.getElementById("user1").value;
    const password = document.getElementById("pass1").value;

    if (username === "admin" && password === "admin") {
        window.location.href = "../HTML/welcome.html";
    } else {
        alert("Wrong Username or password")
    }
}

function resetForm() {
    document.getElementById("loginForm").reset();
}