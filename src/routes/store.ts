
import type { objectButton } from './bouton';
import { writable, type Writable } from 'svelte/store';
import { ResultatPlayer, type ResultPlayer } from './calcul';
import { Load, type Elements } from './load';
import { Boutons } from './bouton';
import { duree } from './translate';

export interface Score {
    play1: number;
    play2: number;
}
export const score = writable<Score>({ play1: 0, play2: 0 });


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
export let textResult = writable<string>('Résultat en attente !!!');


export let resultFinal = writable<ResultPlayer>({ player1: 'ciseaux', player2: 'ciseaux', result: 999, textResult: "" });
export let finish = writable<boolean>(false);
export let lineButtonPlay2 = writable<objectButton>();
// export let finishPlay = writable<boolean>(false);

export function validation(name: string) {
    let buttonLoser: objectButton[] = getWritable(boutons) as objectButton[];
    const lineButton: objectButton = buttonLoser.find(bouton => bouton.id === name) as objectButton;
    idName.set(lineButton.name as string);

    const element: Elements[] = getWritable(elements) as Elements[];
    const player2: Elements = element[Math.floor(Math.random() * element.length)];

    ;
    resultFinal.set(ResultatPlayer.calcul(getWritable(idName) as Elements, player2));
    const text: ResultPlayer = getWritable(resultFinal) as ResultPlayer;

    buttonLoser = buttonLoser.map(bouton => ({
        ...bouton,
        loser: bouton.id !== name
    }));
    boutons.set(buttonLoser);


    // finishPlay.set(true);
    setTimeout(async () => { finish.set(true); }, (duree - 100));
    setTimeout(async () => {
        buttonLoser = buttonLoser.map(bouton => ({
            ...bouton,
            play2: bouton.name == player2
        }));
        boutons.set(buttonLoser);

    }, (duree + 1000));

    setTimeout(async () => {
        textResult.set(text.textResult);
        if (text.result > 0) {
            score.update((currentScore) => {
                return { ...currentScore, play1: currentScore.play1 + 1 };
            });
        } else if (text.result < 0) {
            score.update((currentScore) => {
                return { ...currentScore, play2: currentScore.play2 + 1 };
            });
        }

    }, (duree + 1500));


}

function getWritable(value: Writable<GetWritable>): GetWritable {
    let result: GetWritable = "";
    value.subscribe((val) => {
        result = val;
    });
    return result;
}


