const revealElements = document.querySelectorAll(
'.card, .stat-box, .review-card, .content'
);

function reveal() {
    revealElements.forEach(el => {

        const position =
        el.getBoundingClientRect().top;

        const screen =
        window.innerHeight;

        if(position < screen - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", reveal);
reveal();
