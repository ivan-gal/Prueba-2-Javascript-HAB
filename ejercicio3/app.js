/**
 * Realiza conversión de binario a decimal o decimal binario.
 *
 * @param {Number} num Numero que queremos convertir.
 *
 * @param {Number} base La base de dicho número,
 * si es decimal debemos poner 10, si es binario debemos poner 2.
 *
 * @returns Devuelve un valor Number de la conversión realizada.
 */

function convertNum(num, base) {
    if (base === 10) {
        return (num >>> 0).toString(2);
    } else if (base === 2) {
        let decNum = 0;
        let binNum = num.toString().split('').reverse();
        for (let i = 0; i < binNum.length; i++) {
            if (+binNum[i] === 1) {
                decNum = decNum + 2 ** i;
            }
        }
        return decNum;
    }
    return 'Base invalida, tiene que ser 10 o 2';
}
console.log(convertNum(11011, 2));
