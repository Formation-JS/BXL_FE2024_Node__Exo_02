

export function getJourAvantNoel() {
    const today = new Date();
    const noel = new Date(2025, 11, 25); //? monthIndex (0-11)

    const nbMillisecondeDansUnJour = 1000 * 60 * 60 * 24;
    return  Math.floor((noel - today) / nbMillisecondeDansUnJour);
}