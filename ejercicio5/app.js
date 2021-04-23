/**
 * Devuelve una lista de los personajes de Rick y Morty que han participado
 * en los capítulos estrenados en enero, sin repeticiones.
 * @returns Array con personajes.
 */

async function getCharacters() {
    const URL = 'https://rickandmortyapi.com/api/episode?page=1';
    try {
        const response = await fetch(URL);

        const data = await response.json();

        let nextPage = data.info['next']; // Shows next URL
        const janEpisodesChars = [];

        for (let i = 0; i < data.results.length; i++) {
            const episodes = data.results;
            if (episodes[i].air_date.indexOf('Jan') != -1) {
                const janChars = episodes[i].characters;
                for (let j = 0; j < janChars.length; j++) {
                    const responseChar = await fetch(janChars[j]);
                    const dataJanChar = await responseChar.json();
                    janEpisodesChars.push(dataJanChar.name);
                }
            }
        }
        while (nextPage !== null) {
            try {
                const responsePages = await fetch(nextPage);
                const dataPages = await responsePages.json();
                nextPage = dataPages.info['next'];

                for (let i = 0; i < dataPages.results.length; i++) {
                    const episodesNext = dataPages.results;

                    if (episodesNext[i].air_date.indexOf('Jan') != -1) {
                        const janCharsNext = episodesNext[i].characters;

                        for (let j = 0; j < janCharsNext.length; j++) {
                            const responseCharNext = await fetch(
                                janCharsNext[j]
                            );
                            const dataJanCharNext = await responseCharNext.json();
                            janEpisodesChars.push(dataJanCharNext.name);
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }

        return Array.from(new Set(janEpisodesChars));
    } catch (error) {
        return error;
    }
}

getCharacters()
    .then((characters) => {
        console.log(characters);
    })
    .catch((error) => console.log(error));
