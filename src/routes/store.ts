
import type { objectButton } from './bouton';
import { writable, type Writable } from 'svelte/store';
import { ResultatPlayer, type ResultPlayer } from './calcul';
import { Load, type Elements } from './load';
import { Boutons } from './bouton';
import { duree } from './translate';


export type GetWritable =
    objectButton[] | objectButton | string | number | string[] | number[] | ResultPlayer | ResultPlayer[] | Elements | Elements[] | boolean;

// Créer des stores
export const elements = writable<Elements[]>(Load.load());
export let boutons = writable<objectButton[]>([]); // Initialiser à une liste vide

// Souscrire au store elements et mettre à jour le store boutons
elements.subscribe((value: Elements[]) => {
    boutons.set(value.map((name) => Boutons.getDisplay(name)));
});

export let idName = writable<string>('');
export let resultFinal = writable<ResultPlayer>({ player1: 'ciseaux', player2: 'ciseaux', result: 999 });
export let finish = writable<boolean>(false);
// export let finishPlay = writable<boolean>(false);

export function validation(name: string) {
    let buttonLoser: objectButton[] = getWritable(boutons) as objectButton[];
    const lineButton: objectButton = buttonLoser.find(bouton => bouton.id === name) as objectButton;
    idName.set(lineButton.name as string);

    const element: Elements[] = getWritable(elements) as Elements[];
    const player2: Elements = element[Math.floor(Math.random() * element.length)];
    resultFinal.set(ResultatPlayer.calcul(getWritable(idName) as Elements, player2));

    buttonLoser = buttonLoser.map(bouton => ({
        ...bouton,
        loser: bouton.id !== name
    }));
    boutons.set(buttonLoser);

    // finishPlay.set(true);
    setTimeout(async () => { finish.set(true); }, (duree));
    // setTimeout(async () => { finishPlay.set(true); }, duree);

    console.log(getWritable(resultFinal));
    console.log(getWritable(finish));

}

function getWritable(value: Writable<GetWritable>): GetWritable {
    let result: GetWritable = "";
    value.subscribe((val) => {
        result = val;
    });
    return result;
}


