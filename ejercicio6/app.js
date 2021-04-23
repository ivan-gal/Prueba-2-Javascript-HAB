const body = document.body.childNodes;

/**
 * Devuelve el body del html con las palabras de mas de 5 de letras subrayadas.
 *
 * @param {Node} body El body del html.
 */
function underLineBody(body) {
    for (let key in body) {
        if (body[key].nodeName === 'P') {
            let textContent = body[key].textContent.split(' ');
            let newTextContent = [];
            for (let i = 0; i < textContent.length; i++) {
                if (textContent[i].length > 5) {
                    newTextContent.push('<u>');
                    newTextContent.push(textContent[i]);
                    newTextContent.push('</u>');
                }
                newTextContent.push(textContent[i]);
            }
            body[key].innerHTML = newTextContent.join(' ');
        }
    }
}

underLineBody(body);
