//Get document references

const squareCont = document.querySelector('.square_container');
const addSquare = document.querySelector('.add_square');

//Styling the main container
squareCont.style.cssText =
    'display : flex; flex-wrap : wrap; width : 300px; height : 300px;';

//Styling button

addSquare.style.cssText =
    'position: absolute ; top: 5rem; left: 50rem; width : 100px; height : 50px;';

//Creating the square class

class Square {
    constructor(wid = '100px', hei = '100px') {
        this.width = wid;
        this.height = hei;
        this.color = 'white';
    }
    setRandomColor() {
        const getHexValue = Math.floor(Math.random() * 16777215).toString(16);
        this.color = `#${getHexValue}`;
        return this.color;
    }
    addToHTML(mainDiv) {
        const divSquare = document.createElement('div');
        divSquare.style.backgroundColor = this.setRandomColor();
        divSquare.style.width = this.width;
        divSquare.style.height = this.height;
        mainDiv.append(divSquare);
    }
}

const initialSquares = () => {
    for (let i = 0; i < 9; i++) {
        const square = new Square();
        square.addToHTML(squareCont);
    }
};

initialSquares();

//Creating more squares.

addSquare.addEventListener('click', () => {
    const square = new Square();
    if (squareCont.childElementCount % +squareCont.style.height[0] === 0) {
        if (+squareCont.style.height[0] > +squareCont.style.width[0]) {
            squareCont.style.width = +squareCont.style.width[0] + 1 + '00px';
        } else {
            squareCont.style.height = +squareCont.style.height[0] + 1 + '00px';
        }
    }
    square.addToHTML(squareCont);
});

const timeColorChange = () => {
    setInterval(() => {
        squareCont.childNodes.forEach((node) => {
            const square = new Square();
            node.style.backgroundColor = square.setRandomColor();
        });
    }, 1000);
};

timeColorChange();
