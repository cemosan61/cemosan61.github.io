document.addEventListener("DOMContentLoaded", () => {
    const burgerContainer = document.getElementById("burger");

    // Zutaten in der richtigen Reihenfolge
    const ingredients = [
        { className: "bun-top", delay: 0 },
        { className: "lettuce", delay: 500 },
        { className: "tomato", delay: 1000 },
        { className: "cheese", delay: 1500 },
        { className: "meat", delay: 2000 },
        { className: "bun-bottom", delay: 2500 },
    ];

    // Zutaten nacheinander hinzufügen
    ingredients.forEach((ingredient, index) => {
        setTimeout(() => {
            const element = document.createElement("div");
            element.classList.add("ingredient", ingredient.className);
            element.style.zIndex = ingredients.length - index; // Stapelreihenfolge
            burgerContainer.appendChild(element);
        }, ingredient.delay);
    });
});
