main()

async function main() {
    const jsRequest = await fetch('/assets/js/hero-animation.js')
    const jsString = await jsRequest.text()
    let latestJSCharIndex = 0;
    const jsArray = jsString.split('')
    var hero = document.getElementById('hero-background')
    const revealFunction = function(col) {
        const jsChar = jsArray[latestJSCharIndex++ % jsArray.length];
        col.innerHTML = jsChar
    }

    const handleTouchMove = function(event) {
        const x = event.touches[0].clientX;
        const y = event.touches[0].clientY;
        const animatedColElement = document.elementFromPoint(x, y)
        animatedColElement.revealFunction()
    }

    const gridElements = [];

    for (let i = 0; i < 128; i++) {
        const gridRow = [];
        for (let j = 0; j < 256; j++) {
            const gridElement = document.createElement('div');
            gridElement.classList = 'grid-element';
            gridRow.push(gridElement);
        }
        gridElements.push(gridRow);
    }

    for (let row of gridElements) {
        const rowElement = document.createElement('div');
        rowElement.classList = 'grid-row';
        for (let col of row) {
            rowElement.appendChild(col);
        }
        hero.appendChild(rowElement);
    }

    const animatedGridContainer = document.getElementById('hero-animated-grid');
    for (let row of gridElements) {
        const rowElement = document.createElement('div')
        rowElement.classList = 'grid-row'
       for (let col of row) {
            const colElement = document.createElement('div')
            colElement.classList = 'grid-element'
            colElement.revealFunction = () => revealFunction(col)
            colElement.onmouseenter = () => revealFunction(col)
            colElement.ontouchmove = (event) => handleTouchMove(event, gridElements)
            rowElement.appendChild(colElement)
       }
       animatedGridContainer.appendChild(rowElement)
    }
}