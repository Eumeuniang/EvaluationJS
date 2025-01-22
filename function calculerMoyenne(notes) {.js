function calculerMoyenne(notes) {
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    return somme / notes.length;
}


let notes = [12, 15, 8, 19, 10, 16];
console.log("Moyenne : " + calculerMoyenne(notes));
