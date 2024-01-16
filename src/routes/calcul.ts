import { elements } from './load';
import type { Element } from './load';



export class ResultatPlayer {
    // private player1: Element = "ciseaux";
    // // Générer deux indices aléatoires
    // private player2: Element = elements[Math.floor(Math.random() * elements.length)];

    constructor() { }


    // Comparer les éléments et afficher le résultat

    public static calcul(result1: Element, result2: Element): string[] {
        let resultatFinal: string = ""; // Renommer la variable pour éviter la confusion avec la constante resultat
        let element1 = "";
        let element2 = "";
        const i = elements.indexOf(result1);

        element2 = elements[(i + 1) % elements.length];
        console.log(result1 + " ( ==> " + element2 + " ) == " + result2)

        let compteur: number = 0;
        if (result1 === result2) {
            resultatFinal = `${result1} Egalité ! ${result2}.`;
            compteur = 0;
        } else if (result2 === element2 || result2 === element2) {
            resultatFinal = `${result1} gagne contre ${result2}.`;
            compteur = 1;
        } else {
            resultatFinal = `${result1} perd contre ${result2}.`;
            compteur = -1;
        }
        const choice: HTMLDivElement | null = document.querySelector(".choice");
        if (choice) {
            // choice.innerHTML = "";
            // choice.innerHTML = resultatFinal;
        }
        return [result1, result2, compteur.toString()]; // Ajouter le return pour renvoyer la valeur calculée
    };
}

