function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "user" && password === "test") {
        window.location.replace("/IGracias/main.html");
        // alert("You Are a ADMIN");

    } else {
        alert("Username atau Password salah.");
        return;
    }

}

document.addEventListener("DOMContentLoaded", function () {
    // Remove the 'hidden' class from the main content to display it
    document.querySelector(".main").classList.remove("hidden");

    // Hide the loading container with a smooth transition
    const loadingContainer = document.querySelector(".loading-container");
    loadingContainer.style.transition = "opacity 0.5s ease";
    setTimeout(function () {
        loadingContainer.style.opacity = "0";
        loadingContainer.style.visibility = "hidden";
    }, 500); // You can adjust the duration as needed
});

function back (){
    window.location.assign("/Portal/portal.html")
}