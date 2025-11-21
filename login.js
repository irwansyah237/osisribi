document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    // Email Google valid → ".gmail.com"
    if(email.endsWith("@gmail.com") && pass === "123456"){
        // Pindah halaman
        window.location.href = "pertanyaan.html";
    } else {
        alert("Email atau Password salah!");
    }
});
