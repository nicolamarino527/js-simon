// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// NOTA:
// non è importante l’ordine con cui l’utente inserisce i numeri, basta che ne indovini il più possibile.
// BONUS:
// Inseriamo la validazione: se l’utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

// Scriviamo le costanti
const numberList = document.getElementById("numbers-list");
const button = document.getElementById("button");
const answersForm = document.getElementById("answers-form");
const inputNumber = document.querySelectorAll("#answers-form input");
const result = document.getElementById("result");
const instructions = document.getElementById("instructions")

// Generiamo le cifre da indovinare
let randomNumbersList = [];
    for (let i = 0; i < 5; i++) {
        let randomNumbers = Math.floor(Math.random() * 50) + 1;
        randomNumbersList.push(randomNumbers);
    };
    console.log(randomNumbersList);

// Rendiamo le cifre visibili nell html
numberList.append(randomNumbersList);


// Settiamo il tempo in cui possiamo vedere le cifre
const clock = setTimeout(removeNumbers, 3000);

// Scriviamo la funzione che fa scomparire i numeri e fa comparire i selettori
function removeNumbers() {
    numberList.classList.add("d-none");
    console.log("ecco qua");   
    answersForm.classList.remove("d-none");
};
// Scrivaiamo la funzione che ci permette di far scomparire il form e apparire il risultato
function removeForm() {
    answersForm.classList.add("d-none");
}
// Scrivaiamo la funzione che ci permette di rimuovere le istruzioni
function removeInstrucrions() {
    instructions.classList.add("d-none");
}
// Evento al click immagazzina i numeri del player in un array
button.addEventListener("click", (event) => {

    // Evitiamo che la pagina ricarichi
    event.preventDefault();
    console.log("click");

    // Aggiungiamo i numeri scritti dall utente in un array
    let playerNumbers = [];
        
        // Creiamo un ciclo per aggiungere i numeri all interno dell array
        for (let i = 0; i < inputNumber.length; i++) {

            // Salvo il valore del numero in una variabile
            let number = parseInt(inputNumber[i].value.trim());

            // Inseriamo i numeri all interno dell array
            playerNumbers.push(number);
        }
        console.log(playerNumbers);

    // Compariamo i due array contenenti i numeri casuali
    let sameNumbers = randomNumbersList.filter(common => playerNumbers.includes(common));

    // Rimuoviamo il form e le istruzioni 
    removeForm();
    removeInstrucrions();

    // Mostriamo il risultato in pagina se il giocatore ha indovinato almeno un numero

        // se l risultato è compreso re 1 e 4
        if (sameNumbers.length > 0 && sameNumbers.length <= 4){
            result.textContent = `Bravo Hai indovinato ${sameNumbers.length} numeri su 5, (numeri giusti : ${sameNumbers.join(", ")}).`;
        // se il risultato é 5
        } else if (sameNumbers.length == 5){
            result.textContent = `Complimenti hai indovinato tutti i numeri, numeri giusti : ${sameNumbers.join(", ")}.`;
        // se il risultato è 0
        } else {
            result.textContent = "hai sbagliato tutto...";
    };




    
    

    // console.log(sameNumbers);
    // console.log(sameNumbers.length);
    
    
   
    
    
});


