



// ESERCIZIO NUM 2

// INDICO DOVE SI TROVA IL BOTTONE NEL DOCUMENTO
let dice_btn = document.getElementById("dice_btn");

// CREO LA FUNZIONE DEL BOTTONE CHE LANCI I DADI
dice_btn.addEventListener("click", function(){

    // CREO I GENERATORI DI NUMERI CASUALI
    let dado1 = Math.random() * (6 - 1) + 1 ;
    dado1 = dado1.toFixed(0);

    let dado2 = Math.random() * (6 - 1) + 1 ;
    dado2 = dado2.toFixed(0);

    document.getElementById("umano").innerHTML = dado2;
    document.getElementById("computer").innerHTML = dado1;

    // FACCIO IN MODO DI STAMPARE IL RISULTATO SULLA CONSOLE
    console.log(dado1);
    console.log(dado2);

    // CREO LE VARIABILI CHE AVRANNO COME VALORE I NUMERI GENERATI
    let computer = dado1;
    let umano = dado2; 

    // ESEGUO LE CONDIZIONI E IL MESSAGIO INFORMATIVO SU CHI HA VINTO
    if(umano < computer){
        console.log("Il Computer ha vinto!")
        document.getElementById("dice_winner").innerHTML = "Il computer ha vinto!";
    }
    else if(umano > computer){
        document.getElementById("dice_winner").innerHTML = "L'umano ha vinto!";
        console.log("L'umano ha vinto!")
    }
    else if(umano == computer){
        console.log("Pareggio!")
        document.getElementById("dice_winner").innerHTML = "Pareggio!";
    }

})

