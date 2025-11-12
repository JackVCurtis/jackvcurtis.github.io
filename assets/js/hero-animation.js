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
    let startTouchEl = null
    let endTouchEl = null
    const markStartTouch = function(col) {
        startTouchEl = col
    }
    const markEndTouch = function(col, gridElements) {
        const endXIndex = col.gridIndices.xIndex
        const endYIndex = col.gridIndices.yIndex
        const startXIndex = startTouchEl.gridIndices.xIndex
        const startYIndex = startTouchEl.gridIndices.yIndex

        const xMin = Math.min(startXIndex, endXIndex)
        const xMax = Math.max(startXIndex, endXIndex)

        const yMin = Math.min(startYIndex, endYIndex)
        const yMax = Math.max(startYIndex, endYIndex)

        for (let y = yMin; y <= yMax; y++) {
            for (let x = xMin; x <= xMax; x++) {
                const col = gridElements[y][x];
                revealFunction(col)
            }
        }
        startTouchEl = null
        endTouchEl = null
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
            col.gridIndices = { xIndex: row.indexOf(col), yIndex: gridElements.indexOf(row) }
            colElement.onmouseenter = () => revealFunction(col)
            colElement.ontouchstart = () => markStartTouch(col)
            colElement.ontouchend = () => markEndTouch(col, gridElements)
            rowElement.appendChild(colElement)
       }
       animatedGridContainer.appendChild(rowElement)
    }
}