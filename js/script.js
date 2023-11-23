// ESERCIZIO NUM 1

let emailArray = ["peppe@gmail.com", "peppe123@gmail.com", "123peppe@gmail.com"];

let email_btn = document.getElementById("email_btn");

email_btn.addEventListener("click", function(){

    let email = document.getElementById("email").value;
    let message; 

    for(let i=0; (i<emailArray.length); i++){
        
        if(email != emailArray[i]){
            message = "Email Sbagliata"
            console.log("email sbagliata")
        }
        else if(email === emailArray[i]){
            message = "Email corretta!"
            console.log("email corretta")
        }
    }

    document.getElementById("email_msg").innerHTML = message;

    console.log("Email Utente:" + email)
})




// ESERCIZIO NUM 2

// INDICO DOVE SI TROVA IL BOTTONE NEL DOCUMENTO
let dice_btn = document.getElementById("dice_btn");


// CREO LA FUNZIONE DEL BOTTONE CHE LANCI I DADI
dice_btn.addEventListener("click", function(){

    let message;

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
        message = "Il computer ha vinto!";
    }
    else if(umano > computer){
        message = "L'umano ha vinto!";
        console.log("L'umano ha vinto!")
    }
    else if(umano == computer){
        console.log("Pareggio!")
        message = "Pareggio!";
    }

    document.getElementById("dice_winner").innerHTML = message;

})

