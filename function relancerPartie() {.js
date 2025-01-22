function relancerPartie() {
    
    let rejouer = confirm("Voulez-vous rejouer la partie ?");

    if (rejouer) {
    
        initierJeu();
    } else {
    
        alert("Merci d'avoir joué ! À bientôt.");
    }
}

function initierJeu() {
    
    
    console.log("Jeu initialisé. Bon jeu !");
    
}


initierJeu();


