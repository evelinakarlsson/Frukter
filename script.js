let inputElem; // Referenser till textfälten
let msgElem; // Referens till elementet där meddelanden visas
let fruitNames; // Array med namnen på frukterna
let fruitNr; // Numret på den valda frukten

function init() {
    inputElem = [];
    inputElem[1] = document.getElementById("input1");
    inputElem[2] = document.getElementById("input2");
    inputElem[3] = document.getElementById("input3");

    msgElem = document.getElementById("message");

    fruitNames = ["ingen frukt", "äpple", "banan", "citron", "apelsin", "päron"];
    fruitNr = 0;

    document.getElementById("btn1").addEventListener("click", showFruit);
    document.getElementById("btn2").addEventListener("click", checkName);
}
// Läser in användarens val av frukt och visar motsvarande bild
function showFruit() {
    let nr; // Värdet som användaren skriver in i textfältet
    let fruitUrl; // Sökvägen till den valda fruktbilden

    nr = inputElem[1].value;

    if (isNaN(nr)) {
        msgElem.innerHTML = "Du måste skriva siffror.";
        return;
    }

    if (nr < 1 || nr > 5) {
        msgElem.innerHTML = "Du måste skriva ett tal mellan 1 och 5.";
        return;
    }

    nr = parseInt(nr);
    inputElem[1].value = nr;

    fruitUrl = "pics/fruit" + nr + ".jpg";
    document.getElementById("fruitImg").src = fruitUrl;
    
    fruitNr = nr;
}

window.onload = init; 

function checkName() {
    let name; // Namnet som användaren skriver i det andra textfältet

    name = inputElem[2].value;

    if (name === fruitNames[fruitNr]) {
        msgElem.innerHTML = "Rätt namn.";
    } else {
        msgElem.innerHTML = "Fel namn.";
    }
}