//Convertir a Binario y Decimal

function convertNum(num, base) {
    if (base === 10) {
        return (num >>> 0).toString(2);
    } else if (base === 2) {
        let decNum = 0;
        let binNum = num.toString().split('');
        for (let i = 0; i < binNum.length; i++) {
            if (+binNum[i] === 1) {
                decNum = decNum + 2 ** (binNum.length - 1 - i);
            }
        }
        return decNum;
    }
    return 'Base invalida, tiene que ser 10 o 2';
}
