import { linear, quintOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';

export const duree: number = 600;

export const [send, receive] = crossfade({

});




export default function fadeScale(
    node: Element, { delay = 0, duration = 200, easing = x => x, baseScale = 0 }: { delay: number; duration: number; easing: (t: number) => number; baseScale: number; }
) {

    const o: number = +getComputedStyle(node).opacity;
    const transformValue: string | null = getComputedStyle(node).transform;
    const scaleMatch: RegExpMatchArray | null = transformValue.match(/scale\(([0-9.]+)\)/);
    const m: number[] = scaleMatch ? [parseFloat(scaleMatch[1])] : [1];
    const s: number = m[0];
    const is: number = 1 - baseScale;


    return {
        delay,
        duration,
        css: (t: number) => {
            const eased = easing(t);
            return `opacity: ${eased * o}; transform: scale(${(eased * s * is) + baseScale})`;
        }
    };
}
