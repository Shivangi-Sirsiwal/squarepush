//var BOXSIZE = 100;

export class Square {
    constructor(x, y, height, width) { //need to map color
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
}

export function mapSquares(Piece, BOXSIZE) {
    let c = Piece.location();
    return new Square(BOXSIZE * c.column, BOXSIZE * c.row, BOXSIZE, BOXSIZE);
}

export function drawPuzzle(ctx, gameMap, ninja, numRows) {
    ctx.shadowColor = 'black';
    let BOXSIZE = 500/numRows;
    
    gameMap.forEach(row => {
        row.forEach(piece => {
            let square = mapSquares(piece, BOXSIZE);
            ctx.fillStyle = piece.color;

            ctx.fillRect(square.x, square.y, square.width, square.height);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.strokeRect(square.x, square.y, square.width, square.height);
        })
    });
    
    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, ninja.ninjaCol * BOXSIZE, ninja.ninjaRow * BOXSIZE, BOXSIZE*2, BOXSIZE*2);
    };
    img.src = "ninjase1.svg";
}


export function redrawCanvas(model, canvasObj, appObj) {
    const ctx = canvasObj.getContext('2d');
    if (ctx === null) { return; }    // here for testing purposes...

    // clear the canvas area before rendering the coordinates held in state
    ctx.clearRect(0, 0, canvasObj.width, canvasObj.height);

    if (model.gameMap) {
        drawPuzzle(ctx, model.gameMap, model.ninja, model.numRows);
    }
}