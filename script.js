function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}

// Array der Begrüßungstexte
const headings = ["Willkommen", "Rojbaş", " Hoş geldiniz"];

// Index, um durch die Texte zu iterieren
let currentIndex = 0;

// Referenz auf unser h1-Element
const headingElement = document.getElementById("rotating-text");

// Funktion zum Ändern des angezeigten Textes
function rotateHeading() {
    headingElement.textContent = headings[currentIndex];
    currentIndex = (currentIndex + 1) % headings.length;
}

// Wechsle alle 2 Sekunden den Text
setInterval(rotateHeading, 2000);

