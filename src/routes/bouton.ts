import pierre from '$lib/images/icon-rock.svg';
import feuille from '$lib/images/icon-paper.svg';
import ciseaux from '$lib/images/icon-scissors.svg';
import type { Elements } from './load';
import { Load } from './load';

export interface objectButton {
    id: string;
    name: string;
    position: number;
    path: string;
    done: boolean;
    loser: boolean;
}

export class Boutons {
    private static elements: Elements[] = Load.load();

    constructor(public readonly name: Elements) { }

    public static getDisplay(name: Elements): objectButton {
        // const name: Elements = this.elements[0]; // Modifier en fonction de votre logique d'accès aux éléments
        const position: number = Boutons.elements.indexOf(name) + 1;
        const imagePath: string = Boutons.getImagePath(name);

        return { id: "bouton_" + name, name: name, position: position, path: imagePath, done: false, loser: false };
    }

    private static getImagePath(element: Elements): string {
        switch (element) {
            case 'pierre':
                return pierre; // Assurez-vous que 'pierre' est une variable contenant le chemin de l'image
            case 'feuille':
                return feuille; // Assurez-vous que 'feuille' est une variable contenant le chemin de l'image
            case 'ciseaux':
                return ciseaux; // Assurez-vous que 'ciseaux' est une variable contenant le chemin de l'image
            default:
                return '';
        }
    }
}
