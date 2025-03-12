document.addEventListener("DOMContentLoaded", () => {
    const contactLink = document.querySelector(".nav-links a[href='#contact']");
    const popup = document.getElementById("contact-popup");
    const closeBtn = document.querySelector(".close-btn");

    // Open popup when "Contact" is clicked
    contactLink.addEventListener("click", (event) => {
        event.preventDefault();
        popup.classList.add("active");
    });

    // Close popup when "X" is clicked
    closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
    });

    // Close popup if user clicks outside the content area
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.classList.remove("active");
        }
    });
});
