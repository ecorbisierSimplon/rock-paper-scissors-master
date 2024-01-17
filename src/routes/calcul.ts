import { elements } from './load';
import type { Elements } from './load';

export interface ResultPlayer {
    player1: Elements;
    player2: Elements;
    result: number;
}

export class ResultatPlayer {
    // private player1: Element = "ciseaux";
    // // Générer deux indices aléatoires
    // private player2: Element = elements[Math.floor(Math.random() * elements.length)];

    constructor() { }


    // Comparer les éléments et afficher le résultat

    public static calcul(player1: Elements, player2: Elements): ResultPlayer {
        let resultatFinal: string = ""; // Renommer la variable pour éviter la confusion avec la constante resultat
        let element1 = "";
        let element2 = "";
        const i = elements.indexOf(player1);

        element2 = elements[(i + 1) % elements.length];
        console.log(player1 + " ( ==> " + element2 + " ) == " + player2)

        let result: number = 0;
        if (player1 === player2) {
            resultatFinal = `${player1} Egalité ! ${player2}.`;
            result = 0;
        } else if (player2 === element2 || player2 === element2) {
            resultatFinal = `${player1} gagne contre ${player2}.`;
            result = 1;
        } else {
            resultatFinal = `${player1} perd contre ${player2}.`;
            result = -1;
        }
        const choice: HTMLDivElement | null = document.querySelector(".choice");
        if (choice) {
            // choice.innerHTML = "";
            // choice.innerHTML = resultatFinal;
        }
        return { player1, player2, result }; // Ajouter le return pour renvoyer la valeur calculée
    };
}

