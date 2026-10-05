//Script Inicial

//MENU
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});


//EFEITO NOS CARDS
const categoryCards =
    document.querySelectorAll(".category-card");

categoryCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("card-hover");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("card-hover");
    });
});