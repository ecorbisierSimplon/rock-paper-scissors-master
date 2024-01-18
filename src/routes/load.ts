import { getCookie } from 'typescript-cookie';

export type Elements = 'pierre' | 'ciseaux' | 'feuille' | 'lézard' | 'spock';
export const elements: Elements[] = ['pierre', 'ciseaux', 'feuille'];

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

    public static load(): Elements[] {
        return elements;
    }
}