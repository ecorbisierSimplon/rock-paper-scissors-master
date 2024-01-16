import { getCookie } from 'typescript-cookie';



export type Element = 'pierre' | 'sciseaux' | 'feuille' | 'lézard' | 'spock';
export const elements: Element[] = ['pierre', 'sciseaux', 'feuille'];

export class Load {
    // private player1: Element = "ciseaux";
    // // Générer deux indices aléatoires
    // private player2: Element = elements[Math.floor(Math.random() * elements.length)];

    constructor() {
        if (typeof document !== 'undefined' && Number(getCookie("withOther")) && elements.indexOf('lézard') < 0) {
            elements.push("lézard");
            elements.push("spock");
        }
    }

    public static load(): Element[] {
        return elements;
    }
}