//EXERCICE 1:
let a=parseFloat(prompt("Saisir le premier nombre:"));
let b=parseFloat(prompt("Saisir la deuxieme nombre:"));
let S=a+b;
let Dif=a-b;
let P=a*b;
if (b !== 0){
    let Div=a/b;
    console.log("Le quotient = "+Div);
}
else{
    console.log("Impossible");
}
console.log("La Somme = "+S);
console.log("La difference = "+Dif);
console.log("Le produit = "+P);
//EXERCICE 2:
let cible = Math.floor(Math.random() * 10) + 1;
let essai;
let score = 0;

while (essai !== cible) {
    essai = Number(prompt("Devinez le nombre entre 1 et 10 :"));
    score++;

    if (essai < cible) {
        alert("plus grand");
    } else if (essai > cible) {
        alert("plus petit");
    }
}

alert(score);
//EXERCICE 3:
const QUESTIONS = [
    ["Quelle est la capitale de la France?", "Paris"],
    ["2 + 2?", "4"],
    ["JavaScript est un langage? (Oui/Non)", "Oui"]
];

function lancerQuiz() {
    let score = 0;

    for (let i = 0; i < QUESTIONS.length; i++) {
        let rep = prompt(QUESTIONS[i][0]);

        if (rep === QUESTIONS[i][1]) {
            alert("Réponse juste");
            score++;
        } else {
            alert("Réponse fausse");
        }
    }

    alert("Vous avez répondu correctement à " + score + " questions sur " + QUESTIONS.length);
}