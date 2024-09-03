// You can add interactivity with JavaScript here
import { inject } from "@vercel/analytics"
import { SpeedInsights } from "@vercel/speed-insights/next"
document.addEventListener("DOMContentLoaded", function () {
    // Example: Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
