window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("app").style.display = "block";
    }, 2000); // 2 seconds loading
});

function showMessage() {
    alert("Welcome! App loaded successfully 🎉");
}
