// for con counter numeri da 1 a 100 (i parte 1, non da 0)
// per i multipli di 3 i box si chiameranno Fizz
// per i multipli di 5 Buzz 
// per i multipli di 3 E di 5 FizzBuzz (ha la priorità negli if)

let outputHtml = document.querySelector('.ms_output');

for (let i = 1; i <=100; i++) {

    // prima i multipli di entrambi per priorizzare la loro differenza
    // risulterebbe corretto anche dare 'i % 15 === 0' ma sottolineo con AND l'aggiunta di entrambi i multipli
    if (i % 3 === 0 && i % 5 === 0) {
        outputHtml.innerHTML += '<div class="col-2 m-2 text-center ms_box ms_box-fizzbuzz">Fizzbuzz</div>';
    } 
    // multipli di 3 
    else if (i % 3 === 0) {
        outputHtml.innerHTML += '<div class="col-2 m-2 text-center ms_box ms_box-fizz">Fizz</div>';
    }
    // multipli di 5
    else if (i % 5 === 0) {
        outputHtml.innerHTML += '<div class="col-2 m-2 text-center ms_box ms_box-buzz">Buzz</div>';
    } 
    // tutti i numeri che non rientrano nei if precedenti
    else {
        outputHtml.innerHTML += `<div class="col-2 m-2 text-center ms_box">${i}</div>`;
    }
}



