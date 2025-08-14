/** Obtenir la prochaine itération de la date
 * @param {number} jour 
 * @param {number} mois 
 * @returns {Date}
 */
function getProchaineDate(jour, mois) { 
    const today = new Date();
    const nextEvent = new Date(today.getFullYear(), mois - 1, jour);

    if(today > nextEvent) {
        nextEvent.setFullYear(nextEvent.getFullYear() + 1);
    }

    return nextEvent
}


/** Permet d'obtenir le nombre de jours avec un event
 * @param {'Noel'|'FeteNat'|'Ete'} event 
 * @returns {number}
 */
export function getJourAvantEvent(event) {
    const today = new Date();

    // Date du début et de fin du prochaine event.
    let eventDateStart = null;
    let eventDateEnd = null;
    switch(event) {
        case 'Noel':
            eventDateStart = getProchaineDate(25, 12);
            break;
        case 'FeteNat' : 
            eventDateStart = getProchaineDate(21, 7);
            break;
        case 'Ete':
            eventDateStart = getProchaineDate(1, 7);
            eventDateEnd = getProchaineDate(31, 8);
            break;
        default:
            throw new Error('Event non supporté !');
    }


    const isTodayEvent = today.getDate() === eventDateStart.getDate() && today.getMonth() === eventDateStart.getMonth();
    const inRangeEvent = eventDateEnd !== null 
                            && eventDateStart.getFullYear() > today.getFullYear()  // Si on a depassé la date de "debut"
                            && eventDateEnd.getFullYear() === today.getFullYear(); // Est ce qu'an a depassé la date de "fin"
    
    if(isTodayEvent || inRangeEvent) {
        return 0;
    }

    const nbMillisecondeDansUnJour = 1000 * 60 * 60 * 24;
    return  Math.ceil((eventDateStart - today) / nbMillisecondeDansUnJour);
}