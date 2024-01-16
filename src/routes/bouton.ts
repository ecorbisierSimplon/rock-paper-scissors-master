import pierre from '$lib/images/icon-rock.svg';
import feuille from '$lib/images/icon-paper.svg';
import sciseaux from '$lib/images/icon-scissors.svg';
import type { Element } from './load';
import { Load } from './load';

export class Boutons {
    private elements: Element[] = Load.load();

    constructor(public readonly name: Element) { }

    public getDisplay(): string {
        const name: Element = this.name as Element;
        const position: number = this.elements.indexOf(name) + 1;
        const imagePath: string = this.getImagePath(name);

        return `
            <div id="bouton_${name}"class="image-at-point point-${position}">
                <div>
                    <img src="${imagePath}" alt="SciPaRo ${name}" />
                </div>
            </div>
        `;
    }

    private getImagePath(element: Element): string {
        switch (element) {
            case 'pierre':
                return pierre;
            case 'feuille':
                return feuille;
            case 'sciseaux':
                return sciseaux;
            default:
                return '';
        }
    }

}