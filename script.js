document.addEventListener("DOMContentLoaded", () => {
    const burgerContainer = document.getElementById("burger");

    // Zutaten in der richtigen Reihenfolge
    const ingredients = [
        { className: "bun-top" },
        { className: "lettuce" },
        { className: "tomato" },
        { className: "cheese" },
        { className: "meat" },
        { className: "bun-bottom" },
    ];

    let currentOffset = 200; // Startposition für die erste Zutat (von oben nach unten)

    // Zutaten nacheinander hinzufügen
    ingredients.forEach((ingredient, index) => {
        setTimeout(() => {
            const element = document.createElement("div");
            element.classList.add("ingredient", ingredient.className);
            
            // Position der Zutat: Jede Zutat wird 40px höher als die vorherige hinzugefügt
            element.style.top = `${currentOffset}px`;
            
            // Hinzufügen der Zutat zum Container
            burgerContainer.appendChild(element);

            // Erhöhe die aktuelle Offset-Position für die nächste Zutat
            currentOffset += 40;
        }, index * 500); // Verzögerung zwischen den Zutaten
    });
});
