/**
 * Funcion que cada 5 segundos devuelve por consola el tiempo que ha pasado
 * desde su inicio, formateado como
 * `Han pasado ${DIAS} dias, ${HORAS} horas, ${MINUTOS} minutos y ${SEGUNDOS} segundos.
 */

function clock() {
    const initialTime = new Date();

    setInterval(() => {
        let timePassed = (new Date() - initialTime)
            .toLocaleString('en-us')
            .split(',');
        timePassed[0] = +timePassed[0];
        const time = [0, 0, 0, 0];
        while (timePassed[0] >= 86400) {
            timePassed[0] = timePassed[0] - 86400;
            time[0] += 1;
        }
        while (timePassed[0] >= 3600) {
            timePassed[0] = timePassed[0] - 3600;
            time[1] += 1;
        }
        while (timePassed[0] >= 60) {
            timePassed[0] = timePassed[0] - 60;
            time[2] += 1;
        }
        while (timePassed[0] > 0) {
            timePassed[0] = timePassed[0] - 1;
            time[3] += 1;
        }

        console.log(
            `Han pasado ${time[0]} dias, ${time[1]} horas, ${time[2]} minutos y ${time[3]} segundos.`
        );
    }, 5000);
}

clock();
