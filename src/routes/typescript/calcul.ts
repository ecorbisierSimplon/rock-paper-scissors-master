import { getCookie, setCookie } from "typescript-cookie";


export type Element = 'pierre' | 'ciseaux' | 'feuille' | 'lézard' | 'spock';
export const elements: Element[] = ['pierre', 'ciseaux', 'feuille'];

export class Resultat {
    // private player1: Element = "ciseaux";
    // // Générer deux indices aléatoires
    // private player2: Element = elements[Math.floor(Math.random() * elements.length)];

    constructor() {
        if (typeof document !== 'undefined' && Number(getCookie("withOther")) && elements.indexOf('lézard') < 0) {
            elements.push("lézard");
            elements.push("spock");
        }
    }


    // Comparer les éléments et afficher le résultat

    public calcul(result1: Element, result2: Element): string {
        let resultatFinal: string = ""; // Renommer la variable pour éviter la confusion avec la constante resultat
        let element1 = "";
        let element2 = "";
        const i = elements.indexOf(result1);

        element2 = elements[(i + 1) % elements.length];
        console.log(result1 + " ( ==> " + element2 + " ) == " + result2)

        if (result1 === result2) {
            resultatFinal = "Égalité!";

        } else if (result2 === element2 || result2 === element2) {
            resultatFinal = `${result1} gagne contre ${result2}.`;
        } else {
            resultatFinal = `${result1} perd contre ${result2}.`;
        }

        return resultatFinal; // Ajouter le return pour renvoyer la valeur calculée
    };
}

