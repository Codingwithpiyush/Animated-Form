const form =  document.getElementById("loginForm");

form.addEventListener("submit", e => {
    e.preventDefault();

    const email = form.querySelector('input[type="email"]').value.trim();
    const password = form.querySelector('input[type="password"]').value.trim();

    if(!email || !password){
        alert("fill all fields");
    }

    if(password.length < 6){
        alert("password too short");
    }

    alert("login successful");
    form.reset();
});
