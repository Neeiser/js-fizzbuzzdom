/* -1: Scrivi un programma che stampi in console i numeri da 1 a 100. */
/* -2: Multipli di 3 stampi=             Fizz. */
/* -3: Multipli di 5 stampi=             Buzz. */
/* -4: Multipli di 3 che di 5 stampi=    FizzBuzz. */
/* 5: Appendi un elemento html con il numero o la stringa corretta. */
/* 6: Stile differente a seconda del valore dell'indice per i vari multipli */

let boxContainer = document.querySelector('.box-container');

for (i = 1; i <= 100; i++) {
    const element = document.createElement('div');
    element.classList.add('box-structure');
    element.innerHTML = i;


    if ((i % 3 == 0) && (i % 5 == 0)) {
        element.classList.add('multy15');
    } else if (i % 5 == 0) {
        element.classList.add("multy5");
    } else if(i % 3 == 0) {
        element.classList.add("multy3");
    } else {
        element.classList.add("multy-none");
    }

    boxContainer.append(element);
}