function demanderNombreJoueurs() {
    let nombreJoueurs;
    do {
        
        let input = prompt("Combien de joueurs participeront au jeu ?");
        
        
        nombreJoueurs = parseInt(input);
        
        
        if (isNaN(nombreJoueurs) || nombreJoueurs < 2) {
            alert("Veuillez entrer un nombre entier supérieur ou égal à 2.");
        }
    } while (isNaN(nombreJoueurs) || nombreJoueurs < 2);
    
    
    return nombreJoueurs;
}

let nombreJoueurs = demanderNombreJoueurs();
console.log("Nombre de joueurs validé : " + nombreJoueurs);


