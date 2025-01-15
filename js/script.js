// scriviamo le costanti
const numberList = document.getElementById("numbers-list");
const button = document.getElementById("button");

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
const clock = setTimeout(disappear, 2000);

// scriviamo la funzione che fa scomparire i numeri
function disappear() {
    numberList.classList.add("d-none");
    console.log("ecco qua");   
};



