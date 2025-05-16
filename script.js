document.addEventListener("DOMContentLoaded", () => {
    console.log("Photography site loaded!");
});
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#gallery img");
    images.forEach(img => {
        img.style.opacity = "0";
        img.style.transition = "opacity 1s";
        setTimeout(() => img.style.opacity = "1", 500);
    });
});


