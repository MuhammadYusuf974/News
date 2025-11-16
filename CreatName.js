function saveName() {
    const name = document.getElementById("fakeName").value.trim();
    const msg = document.getElementById("msg");

    // Har safar xabarni yangilashdan oldin classni olib tashlash
    msg.classList.remove("show");
    void msg.offsetWidth; // reflow qilish, animatsiyani qayta ishga tushirish

    if (name.length < 3) {
        msg.style.color = "red";
        msg.textContent = "❌ Ism juda qisqa!";
        msg.classList.add("show");
        return;
    }

    // Rostakam ismlar ro'yxati
    const realNames = [
        "yusuf", "muhammad", "muhammadyusuf", 
        "aziz", "alisher", "umar", "islom", "doston"
    ];

    if (realNames.includes(name.toLowerCase())) {
        msg.style.color = "red";
        msg.textContent = "❌ Rostakam ismingizni yozmang!";
        msg.classList.add("show");
        return;
    }

    msg.style.color = "lightgreen";
    msg.textContent = `✔ Xush kelibsiz, ${name}! Sizning tanlangan nicknamiz shu.`;
    msg.classList.add("show");

    // LocalStorage ga saqlash
    localStorage.setItem("nickname", name);

    // 2 sekunddan keyin sahifa o'zgaradi
    setTimeout(() => {
        window.location.href = "Main.html";
    }, 2000);
}
document.getElementById("saveBtn").addEventListener("click", saveName);
document.getElementById("fakeName").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Formni yuborishni to'xtatadi
        saveName();
    }
});