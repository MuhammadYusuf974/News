const signInBtn = document.getElementById("signInBtn");
const registerContainer = document.getElementById("registerContainer");

// Modalni ochish
signInBtn.addEventListener("click", () => {
  const signInModal = new bootstrap.Modal(document.getElementById("signInModal"));
  signInModal.show();
});

// Shunchaki demo uchun status
document.getElementById("sendCode").onclick = () => {
  document.getElementById("status").innerText = "Kod yuborildi! (demo)";
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
};

document.getElementById("verifyCode").onclick = () => {
  document.getElementById("status").innerText = "Kod tasdiqlandi!";
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "block";
};

document.getElementById("createAccount").onclick = () => {
  document.getElementById("status").innerText = "Hisob yaratildi! Endi Sign In orqali kiring.";
};


document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Formni qayta yuklanishdan to'xtatadi

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Faqat bo'sh emasligini tekshiramiz
    if (email !== "" && password !== "") {
        window.location.href = "CreateName.html"; // Keyingi sahifaga o'tkazish
    } else {
        alert("Iltimos email va parolni to'ldiring!");
    }
});

document.getElementById("nextBtn").addEventListener("click", function() {
    window.location.href = "CreateName.html";
     // 2 sekunddan keyin sahifa o'zgaradi
    setTimeout(() => {
        window.location.href = "CreateName.html";
    }, 1000);
});
