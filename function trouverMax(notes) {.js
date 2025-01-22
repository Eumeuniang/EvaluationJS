function trouverMax(notes) {
    let max = notes[0];
    for (let i = 1; i < notes.length; i++) {
        if (notes[i] > max) {
            max = notes[i];
        }
    }
    return max;
}
let notes = [12, 15, 8, 19, 10, 16];
console.log("Meilleure note : " + trouverMax(notes));