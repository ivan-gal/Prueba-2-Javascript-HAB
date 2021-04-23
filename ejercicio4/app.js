const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

/**
 * Elimina de un array los elementos repetidos.
 * @param {Array} array El array que queramos modificar.
 * @returns Un array sin los elementos repetidos.
 */

function removeRep(array) {
    const newArray = [];

    for (let val of array) {
        let timesRep = 0;
        for (let uni of newArray) {
            if (val === uni) {
                timesRep++;
            }
        }
        if (timesRep === 0) newArray.push(val);
    }

    return newArray;
}

console.log(removeRep(names));
