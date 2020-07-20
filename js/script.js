// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 84 numeri ogni volta potrebbe essere un po’ scocciante :wink:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve…

// CREO 2 ARRAY
var numeriPc = [];
var numeriUtente = [];
var scelta = parseInt(prompt('scegli livello difficoltà tra 0, 1, 2'));
var difficolta;

switch (scelta) {
    case 0:
        difficolta = 100;
        break;
    case 1:
        difficolta = 80;
        break;
    case 2:
        difficolta = 50;
        break;
    default:
        difficolta = 100;

}

// CREO 16 NUMERI CASUALI SENZA DOPPIONI
var i = 1;
var massimo = difficolta - 16;
console.log(massimo);
while (numeriPc.length < 16) {
    var numeroRandom;
    numeroRandom = random(1, difficolta);
    if (trova(numeriPc, numeroRandom) == false) {
        numeriPc.push(numeroRandom);
        i++;
    }
}
console.log(numeriPc);

// FACCIO INSERIRE NUMERO ALL'utente
var numeroUtente;
var bomba = false;

while (numeriUtente.length < massimo && bomba == false) {
    numeroUtente = parseInt(prompt('inserisci un numero'));
    if (trova(numeriPc, numeroUtente)) {
        bomba = true;
    } else if (trova(numeriUtente, numeroUtente)) {
        alert('numero già inserito')
    } else {
        numeriUtente.push(numeroUtente)
    }
}

console.log(numeriUtente);
if (bomba == true) {
    alert('hai perso!');
} else if (numeriUtente.length == massimo) {
    alert('hai vinto!!!');
} else {
    alert('yuri ha fatto qualche cazzata');
}


// FUNZIONI
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function trova(array, elemento) {
    var i = 0
    while(i < array.length) {
        if (elemento == array[i]) {
            return true
        }
        i++;
    }
    return false
}
