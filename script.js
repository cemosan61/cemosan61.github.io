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

    let currentOffset = 0; // Startposition (von unten nach oben)

    // Zutaten nacheinander hinzufügen
    ingredients.forEach((ingredient, index) => {
        setTimeout(() => {
            const element = document.createElement("div");
            element.classList.add("ingredient", ingredient.className);
            
            // Position der Zutat basierend auf der aktuellen Stapelhöhe
            element.style.top = `${currentOffset}px`;
            burgerContainer.appendChild(element);

            // Höhe der Zutat (40px) zum Offset hinzufügen, um sie übereinander zu stapeln
            currentOffset += 40;
        }, index * 500); // Verzögerung zwischen den Zutaten
    });
});
