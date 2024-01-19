import { elements, genre } from './load';
import type { Elements } from './load';

export interface ResultPlayer {
    player1: Elements;
    player2: Elements;
    result: number;
    textResult: string;
}

export class ResultatPlayer {
    constructor() { }


    public static calcul(player1: Elements, player2: Elements): ResultPlayer {
        let textResult: string = "";
        const i = elements.indexOf(player1);
        const j = elements.indexOf(player2);
        const element2 = elements[(i + 1) % elements.length];
        const display1: string = genre[i] + " " + player1;
        const display2: string = genre[j] + " " + player2;


        let result: number = 0;
        if (player1 === player2) {
            textResult = `<span>${display1}</span><span> est en égalité avec </span><span>${display2}.</span>`;
            result = 0;
        } else if (player2 === element2 || player2 === element2) {
            textResult = `<span>${display1}</span><span> gagne contre </span><span>${display2}.</span>`;
            result = 1;
        } else {
            textResult = `<span>${display1}</span><span> perd contre </span><span>${display2}.</span>`;
            result = -1;
        }

        return { player1, player2, result, textResult };
    };
}

