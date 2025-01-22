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


function afficherScoresEtGagnant(scores) {
    let gagnant = 0;
    let scoreMax = scores[0];
    let egalite = false;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > scoreMax) {
            gagnant = i;
            scoreMax = scores[i];
            egalite = false;
        } else if (scores[i] === scoreMax) {
            egalite = true;
        }
    }

    for (let i = 0; i < scores.length; i++) {
        console.log(`Joueur ${i + 1}: ${scores[i]} points`);
    }

    if (egalite) {
        console.log("Il y a une égalité !");
    } else {
        console.log(`Le gagnant est le Joueur ${gagnant + 1} avec ${scoreMax} points !`);
    }
}


function alertScoresEtGagnant(scores) {
    let message = "";
    let gagnant = 0;
    let scoreMax = scores[0];
    let egalite = false;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > scoreMax) {
            gagnant = i;
            scoreMax = scores[i];
            egalite = false;
        } else if (scores[i] === scoreMax) {
            egalite = true;
        }
    }

    for (let i = 0; i < scores.length; i++) {
        message += `Joueur ${i + 1}: ${scores[i]} points\n`;
    }

    if (egalite) {
        message += "Il y a une égalité !";
    } else {
        message += `Le gagnant est le Joueur ${gagnant + 1} avec ${scoreMax} points !`;
    }

    alert(message);
}

const nombreJoueurs = parseInt(prompt("Combien de joueurs participeront au jeu ?"));
const scores = jouerTours(nombreJoueurs);
afficherScoresEtGagnant(scores);
alertScoresEtGagnant(scores);
