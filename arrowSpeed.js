import { makeDOMwithProperties } from "./utils/dom.js";

const MAX_ARROW = 8;

let arrowDOMList = [];
const arrowFieldDOM = document.getElementById('arrow-field');

const clearArrowDOM = () => {
    arrowDOMList.forEach((arrowDOM) => {
        arrowDOM.remove();

    });
    arrowDOMList = [];
}

const setArrowDOM = () => {
    clearArrowDOM();
    for (let i = 0; i < MAX_ARROW; i++) {
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        const arrowDOM = makeDOMwithProperties('span', {
            className: `arrow arrow-${direction}`,
            innerHTML: direction === 'left' ? '&lt;' : '&gt;',
        });
        arrowDOMList.push(arrowDOM);
        arrowFieldDOM.appendChild(arrowDOM);

    }
}

setArrowDOM();