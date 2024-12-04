document.addEventListener("DOMContentLoaded", () => {
    const burgerContainer = document.getElementById("burger-container");

    // Zutaten in der richtigen Reihenfolge
    const ingredients = [
        { className: "bun-top" },
        { className: "lettuce" },
        { className: "tomato" },
        { className: "cheese" },
        { className: "meat" },
        { className: "bun-bottom" },
    ];

    let currentOffset = -100; // Startposition für die erste Zutat (von oben nach unten)

    // Zutaten nacheinander hinzufügen
    ingredients.forEach((ingredient, index) => {
        setTimeout(() => {
            const element = document.createElement("div");
            element.classList.add("ingredient", ingredient.className);
            
            // Jede Zutat wird 40px höher als die vorherige hinzugefügt
            element.style.top = `${currentOffset}px`;
            
            // Zutat zum Container hinzufügen
            burgerContainer.appendChild(element);

            // Erhöhe den Offset für die nächste Zutat
            currentOffset += 40;
        }, index * 1000); // Verzögerung von 1000ms zwischen den Zutaten
    });
});
