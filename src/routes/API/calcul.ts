import { getCookie, setCookie } from "typescript-cookie";


export type Element = 'pierre' | 'ciseaux' | 'feuille' | 'puit';
export const elements: Element[] = ['pierre', 'ciseaux', 'feuille'];
if (Number(getCookie("withPuit"))) {
    elements.push("puit");
}


let player1: Element = "ciseaux";
// Générer deux indices aléatoires
let player2: Element = elements[Math.floor(Math.random() * elements.length)];




// Comparer les éléments et afficher le résultat

export function resultat(result1: Element, result2: Element): string {
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


