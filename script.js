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