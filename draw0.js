// Získání reference k HTML canvas elementu s id 'myCanvas'
let canvas = document.getElementById("myCanvas");

// Získání 2D vykreslovacího kontextu pro canvas
let ctx = canvas.getContext("2d");

// Nastavení barvy výplně na šedou
ctx.fillStyle = "#000000";

// Vykreslení obdélníka, který pokryje celý canvas touto šedou barvou
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Přidání posluchače událostí k celému dokumentu pro detekci stisku klávesy
document.addEventListener("keydown", function (event) {
    console.log(event);
    // Kontroluje, zda byla stisknuta klávesa Escape
    if (event.code === "Escape") {
        // Pokud ano, znovu vykreslí celý canvas šedou barvou
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return; // Ukončení funkce
    }

    switch (event.code) {
        case "KeyS":
            // Generuje náhodné souřadnice x a y uvnitř plátna
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            // Generuje náhodnou velikost obdélníka mezi 50 a 150
            let size = Math.random() * 100 + 50;
            // Generuje náhodnou barvu
            let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
                Math.random() * 255
            })`;
            // Vykreslí obdélník s náhodnými parametry
            drawRectangle(x, y, size, size, col);
            break;
        case "KeyE":
            randomEllipse();
            break;
    }
});

function randomEllipse() {
    let w = Math.random() * 100 + 50;
    let h = Math.random() * 100 + 50;
    let x = Math.random() * (canvas.width - w) + w / 2;
    let y = Math.random() * (canvas.height - h) + h / 2;
    let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
    })`;
    drawEllipse(x, y, w, h, c);
}

// Funkce pro vykreslení obdélníka na plátno s danými parametry
function drawRectangle(x, y, w, h, col) {
    // Nastavení barvy výplně pro obdélník
    ctx.fillStyle = col;
    ctx.strokeStyle = col;
    // Vykreslení obdélníka na plátno s danými souřadnicemi (x, y),
    // šířkou (w) a výškou (h)
    // ctx.fillRect(x, y, w, h);
    ctx.strokeRect(x, y, w, h);
}

// Funkce pro vykreslení elipsy na plátno s danými parametry
function drawEllipse(x, y, w, h, col) {
    // Nastavení barvy výplně pro elipsu
    ctx.fillStyle = col;
    // Začátek nové cesty (to je důležité pro kreslení tvarů jako jsou kruhy, elipsy atd.)
    ctx.beginPath();
    // Vykreslení elipsy s centrem v bodě (x, y), s horizontálním poloměrem (w / 2),
    // vertikálním poloměrem (h / 2) a úhlem od 0 do 2π (což je celý kruh)
    ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
    // Vyplnění elipsy nastavenou barvou
    ctx.fill();
}

// Funkce pro vykreslení kruhu na plátno s danými parametry
function drawCircle(x, y, r, col) {
    // Nastavení barvy výplně pro kruh
    ctx.fillStyle = col;
    // Začátek nové cesty (to je důležité pro kreslení tvarů jako jsou kruhy, elipsy atd.)
    ctx.beginPath();
    // Vykreslení kruhu s centrem v bodě (x, y), poloměrem (r) a úhlem od 0 do 2π
    // (což je celý kruh)
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    // Vyplnění kruhu nastavenou barvou
    ctx.fill();
}

// Funkce pro vykreslení čtverce na plátno s danými parametry
function drawSquare(x, y, s, col) {
    // Nastavení barvy výplně pro čtverec
    ctx.fillStyle = col;
    // Vykreslení čtverce na plátno s danými souřadnicemi (x, y) a rozměry (s x s)
    ctx.fillRect(x, y, s, s);
}

// Funkce pro vykreslení pruhů po canvasu

let stripeIndex = 0; // Index aktuálního pruhu

document.addEventListener("keydown", function (event) {
    console.log(event);
    // Kontroluje, zda byla stisknuta klávesa Escape
    if (event.code === "Escape") {
        // Pokud ano, znovu vykreslí celý canvas šedou barvou
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        stripeIndex = 0; // Resetuje index pruhů
        return; // Ukončení funkce
    }

    switch (event.code) {
        case "KeyS":
            // Generuje náhodné souřadnice x a y uvnitř plátna
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            // Generuje náhodnou velikost obdélníka mezi 50 a 150
            let size = Math.random() * 100 + 50;
            // Generuje náhodnou barvu
            let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
                Math.random() * 255
            }`;
            // Vykreslí obdélník s náhodnými parametry
            drawRectangle(x, y, size, size, col);
            break;
        case "KeyE":
            randomEllipse();
            break;
        case "KeyC":
            drawStripe();
            break;
    }
});

function drawStripe() {
    if (stripeIndex < canvas.width) {
        const stripeWidth = 20; // Šířka pruhu
        const stripeColors = ["#FF0000", "#00FF00", "#0000FF"]; // Barevné pruhy
        const col = stripeColors[stripeIndex % stripeColors.length]; // Opakování barevných pruhů

        ctx.fillStyle = col;
        ctx.fillRect(stripeIndex, 0, stripeWidth, canvas.height);

        stripeIndex += stripeWidth;
    }
}

// Funkce pro postupné barvení plátna začínající z vnitřní strany canvasu až do středu

let gradientIndex = 0; // Index aktuální barvy pro gradient

document.addEventListener("keydown", function (event) {
    console.log(event);
    // Kontroluje, zda byla stisknuta klávesa Escape
    if (event.code === "Escape") {
        // Pokud ano, znovu vykreslí celý canvas šedou barvou
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        stripeIndex = 0; // Resetuje index pruhů
        gradientIndex = 0; // Resetuje index gradientu
        return; // Ukončení funkce
    }

    switch (event.code) {
        case "KeyS":
            // Generuje náhodné souřadnice x a y uvnitř plátna
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            // Generuje náhodnou velikost obdélníka mezi 50 a 150
            let size = Math.random() * 100 + 50;
            // Generuje náhodnou barvu
            let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
                Math.random() * 255
            }`;
            // Vykreslí obdélník s náhodnými parametry
            drawRectangle(x, y, size, size, col);
            break;
        case "KeyE":
            randomEllipse();
            break;
        case "KeyC":
            drawStripe();
            break;
        case "KeyI":
            drawGradient();
            break;
    }
});

function drawGradient() {
    const gradientColors = ["#FF0000", "#00FF00", "#0000FF"]; // Barevný gradient
    const maxThickness = Math.min(canvas.width, canvas.height) / 2;
    const numSteps = 20;

    for (let i = 0; i < numSteps; i++) {
        const col = gradientColors[gradientIndex % gradientColors.length]; // Opakování barevného gradientu
        const thickness = (i / numSteps) * maxThickness;
        const x = thickness;
        const y = thickness;
        const width = canvas.width - 2 * thickness;
        const height = canvas.height - 2 * thickness;

        ctx.fillStyle = col;
        ctx.fillRect(x, y, width, height);

        gradientIndex++;
    }
}
// Funkce pro pohybující se čtverec

let animationFrameId; // ID animačního snímku
let x = 0; // Počáteční pozice čtverce na ose X
let y = 0; // Počáteční pozice čtverce na ose Y
const squareSize = 50; // Velikost čtverce
const speed = 2; // Rychlost pohybu
let dx = speed; // Horizontální rychlost
let dy = 0; // Vertikální rychlost

function animateSquare() {
    function draw() {
        // Vymazat předchozí snímek
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Vykreslit čtverec na aktuální pozici
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(x, y, squareSize, squareSize);

        // Aktualizovat pozici čtverce
        x += dx;
        y += dy;

        // Pokud čtverec opustí plátno, vrátit ho zpět na začátek
        if (x > canvas.width) {
            x = -squareSize;
        }
        if (x < -squareSize) {
            x = canvas.width;
        }
        if (y > canvas.height) {
            y = -squareSize;
        }
        if (y < -squareSize) {
            y = canvas.height;
        }

        // Spustit další snímek animace
        animationFrameId = requestAnimationFrame(draw);
    }

    // Spustit animaci
    draw();
}

document.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.code === "Escape") {
        // Zastavit animaci při stisku klávesy Escape
        cancelAnimationFrame(animationFrameId);
        return;
    }

    if (event.code === "KeyA") {
        // Spustit animaci při stisku klávesy "A"
        animateSquare();
    }

    // Ovládání směru čtverce pomocí šipek
    if (event.code === "ArrowLeft") {
        dx = -speed; // Posunout doleva
        dy = 0;
    }
    if (event.code === "ArrowRight") {
        dx = speed; // Posunout doprava
        dy = 0;
    }
    if (event.code === "ArrowUp") {
        dy = -speed; // Posunout nahoru
        dx = 0;
    }
    if (event.code === "ArrowDown") {
        dy = speed; // Posunout dolů
        dx = 0;
    }
});





