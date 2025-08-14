import { formTypeEnum } from "../enums/forme.enum.js";

// Fonction non exporté pour l'utiliser en interne
function roundResult(value) {
    return Math.round(value * 1_000) / 1_000;
}

// Permet de calculer le perimetre en fonction du type de form
export function getPerimetre(form) {

    let result;
    switch (form.type) {
        case formTypeEnum.CERCLE:
            result = 2 * Math.PI * form.rayon;
            break;
        case formTypeEnum.CARRE:
            result = 4 * form.cote;
            break;
        case formTypeEnum.RECTANGLE:
            result = 2 * (form.hauteur + form.largeur);
            break;
        case formTypeEnum.TRIANGLE:
            const hypotenuse = Math.sqrt(Math.pow(form.hauteur, 2) + Math.pow(form.largeur, 2));
            result = form.hauteur + form.largeur + hypotenuse;
            break;
        default:
            throw new Error('Type de form non supporté !');
    }

    return roundResult(result);
}

// Permet de calculer l'aire en fonction du type de form
export function getAire(form) {

    let result;
    switch (form.type) {
        case formTypeEnum.CERCLE:
            result = Math.PI * Math.pow(form.rayon, 2);
            break;
        case formTypeEnum.CARRE:
            result = Math.pow(form.cote, 2);
            break;
        case formTypeEnum.RECTANGLE:
            result = form.hauteur * form.largeur;
            break;
        case formTypeEnum.TRIANGLE:
            result = (form.hauteur * form.largeur) / 2;
            break;
        default:
            throw new Error('Type de form non supporté !');
    }

    return roundResult(result);
}