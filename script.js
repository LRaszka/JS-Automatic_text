const heading = document.getElementById("text");
console.log(heading);

const speedOriginal = document.getElementById("speed");
console.log(speedOriginal);

const text = "Lukáš vypisuje text...";

let idLetter = 1;
let delay = 500 / speedOriginal.value;
console.log(delay);

function printText(){
    heading.innerText = text.slice(0,idLetter); //vytáhne první písmeno + přidá další písmeno v dalším průběhu
    idLetter++;
    setTimeout(printText, delay); //spustí funkci se spožděním delay
    if (idLetter > text.length){
        idLetter = 1;
    }
}
printText();

speedOriginal.addEventListener("input", function(event){ //čekání na změnu rychlosti
    delay = 500 / event.target.value;
});

//Další možnost: (vypisuje do konzole)
/*
function pozdrav(){
    console.log("Ahoj, jak se máš");
    setTimeout(pozdrav, 2000);
}
pozdrav();
*/
