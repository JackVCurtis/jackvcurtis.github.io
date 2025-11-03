document.addEventListener("DOMContentLoaded", function() {
    const jsString = `
function main(jsString) {
    let latestJSCharIndex = 0;
    const jsArray = jsString.split('')
    var hero = document.getElementById('hero-background')
    const revealFunction = function(col) {
         const jsChar = jsArray[latestJSCharIndex++ % jsArray.length];
        col.innerHTML = jsChar
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
        colElement.onmouseenter = () => revealFunction(col)
        colElement.ontouchstart = () => revealFunction(col)
        rowElement.appendChild(colElement)
       }
       animatedGridContainer.appendChild(rowElement)
    }
}
    `.replace(/\s\s+/g, ' ')
    main(jsString)
});

function main(jsString) {
    let latestJSCharIndex = 0;
    const jsArray = jsString.split('')
    var hero = document.getElementById('hero-background')
    const revealFunction = function(col) {
        const jsChar = jsArray[latestJSCharIndex++ % jsArray.length];
        col.innerHTML = jsChar
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
        colElement.onmouseenter = () => revealFunction(col)
        colElement.ontouchstart = () => revealFunction(col)
        rowElement.appendChild(colElement)
       }
       animatedGridContainer.appendChild(rowElement)
    }
}