// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





function orderNow() {
    if (confirm("Do you want to proceed to payment?")) {
        window.location.href = "payment.html"; // Redirect to a payment page
    }
}

