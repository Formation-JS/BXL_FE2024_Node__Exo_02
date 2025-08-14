import chalk from "chalk";
import * as formeModule from './modules/forme.js';
import { getJourAvantNoel } from "./modules/events.js";

console.log(chalk.redBright('Exo 02.1 - Calcule de l\'aire et du périmetre'))
const f1 = {
    type: 'Cercle',
    rayon: 42
};

const f2 = {
    type: 'Rectangle',
    hauteur: 10,
    largeur: 2
};

const f3 = {
    type: 'Triangle',
    hauteur: 10,
    largeur: 2
};

const r1 = formeModule.getPerimetre(f1);
const r2 = formeModule.getAire(f2);
const r3 = formeModule.getPerimetre(f3);
const r4 = formeModule.getAire(f3);

console.log('Périmetre de f1', r1);
console.log('Aire de f2', r2);
console.log('Périmetre de f3', r3);
console.log('Aire de f3', r3);


console.log(chalk.magentaBright('-----------------------------------------------------------'))

console.log(chalk.redBright('Exo 02.2 - Calcule du nombre de journée'))

const nbNoel = getJourAvantNoel();
console.log(`Nombre de jour avant noel : ${nbNoel}`);

