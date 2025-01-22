javascript
function lancerDe() {
    return Math.floor(Math.random() * 6) + 1;
}

function jouerTours(nombreJoueurs) {
    const scores = new Array(nombreJoueurs).fill(0);

    for (let tour = 0; tour < 10; tour++) {
        for (let joueur = 0; joueur < nombreJoueurs; joueur++) {
            const resultat = lancerDe();
            scores[joueur] += resultat;
        }
    }

    return scores;
}

function afficherScores(scores) {
    scores.forEach((score, index) => {
        console.log(`Joueur ${index + 1}: ${score} points`);
    });
}

// Appeler les fonctions et afficher les résultats
const nombreJoueurs = 3; // Par exemple, 3 joueurs
const scores = jouerTours(nombreJoueurs);
afficherScores(scores);
