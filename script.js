document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll Effect for Menu Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Button Click Animation
    document.querySelectorAll(".order-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Thank you for ordering! We will process your request soon.");
        });
    });
});
