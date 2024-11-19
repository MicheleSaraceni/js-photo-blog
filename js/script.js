"use strict";
console.clear();

/* CONSEGNA */
/**************************************************************
*Milestone 1*
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

*Milestone 2*
Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

*Milestone 3*
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

*Bonus*
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
 
**************************************************************/

const main = document.querySelector(".container");

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then((result) => {
        let arrayimg = [];
        let arraydesc = [];
        for (let i = 0; i < result.data.length; i++) {
            arrayimg.push(result.data[i].url);
            arraydesc.push(result.data[i].title);
        }
        for (let i = 0; i < result.data.length; i++) {
            const template = `<div class="card flex-center flex-column">
            <div class="pin"></div>
            <div class="img">
                <img src="${arrayimg[i]}" alt="">
            </div>
            <div class="description">
            ${arraydesc[i]}
            </div>
        </div>`;
            main.innerHTML += template;
        }

        const card = document.querySelectorAll(".card");
        console.log(card[0]);

        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener("click", () => {
                const template = `<div class="containerimg flex-center">
            <div class="imgbig">
                <img src="" alt="">
            </div>
            <div class="btn">ESCI</div>
        </div>`;
                main.innerHTML += template;
                //Bottone per uscire dall'img a tutto schermo
                const btn = document.querySelector(".btn");

                btn.addEventListener("click", () => {
                    const containerimg = document.querySelector(".containerimg");
                    main.removeChild(containerimg);
                });
            });
        }





    });

