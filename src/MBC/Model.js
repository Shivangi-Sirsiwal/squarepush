export class MoveType {
    constructor(dr, dc) {
        this.deltar = dr;
        this.deltac = dc;
    }
    
    static parse(s) {
        if ((s === "down")  || (s === "Down"))   { return Down; }
        if ((s === "up")    || (s === "Up"))     { return Up; }
        if ((s === "left")  || (s === "Left"))   { return Left; }
        if ((s === "right") || (s === "Right"))  { return Right; }
        
        return NoMove;
    }
}

export const Down = new MoveType(1, 0, "down");
export const Up = new MoveType(-1, 0, "up");
export const Left = new MoveType(0, -1, "left");
export const Right = new MoveType(0, 1, "right");
export const NoMove = new MoveType(0, 0, "*");  // no move is possible

export class Coordinate {
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
}

export class Ninja {
    constructor(ninjaRow, ninjaCol){
        this.ninjaRow = ninjaRow;
        this.ninjaCol = ninjaCol;
    }

    ninjaBuild(){
        this.ninjaTopLeft = new Coordinate(this.ninjaRow, this.ninjaCol);
        this.ninjaTopRight = new Coordinate(this.ninjaRow, this.ninjaCol+1);
        this.ninjaBottomLeft = new Coordinate(this.ninjaRow+1, this.ninjaCol);
        this.ninjaBottomRight = new Coordinate(this.ninjaRow+1, this.ninjaCol+1);
    }

    ninjaAvailMoves(gameRows, gameCols){
        let rowMax = gameRows - 1;
        let colMax = gameCols - 1;
        let ninjaMoves =[];
        if (this.ninjaTopLeft.row > 0){
            ninjaMoves.push(Up);
        }

        if (this.ninjaBottomRight.row < rowMax){
            ninjaMoves.push(Down);
        }

        if (this.ninjaTopLeft.column > 0){
            ninjaMoves.push(Left);
        }

        if(this.ninjaBottomRight.column < colMax){
            ninjaMoves.push(Right);
        }

        return ninjaMoves;
    }

    move(direction){
        this.ninjaRow = this.ninjaRow += direction.deltar;
        this.ninjaCol = this.ninjaCol += direction.deltac;
    }
}

export class Piece{ //check moveable and removable
    constructor(row, col, color){
        this.row = row;
        this.col = col;
        this.color = color;
    }

    move(direction){
        this.row += direction.deltar;
        this.col += direction.deltac;
    }

    location() {
        return new Coordinate(this.row, this.col);
    }
}

export class GameBoard{
    constructor(numRows, numCols){
        this.numGameRows = numRows;
        this.numGameCols = numCols; 
        this.gameMap = []       
    }

    genEmptyMap(){
        for (var r = 0; r < this.numGameRows; r++) {
            this.gameMap[r] = [];
            for (var c = 0; c < this.numGameCols; c++) {
                this.gameMap[r][c] = new Piece(r, c, 'white');
            }
        }
    }
}

export default class Model {
    constructor(info){
        this.initilaize(info);
        this.info = info;
    }

    initilaize(info){
        this.numRows = parseInt(info.numRows);
        this.numColumns = parseInt(info.numColumns);
        let ninjaRow = parseInt(info.ninjaRow) - 1;
        let ninjaCol = info.ninjaColumn.charCodeAt(0) - "A".charCodeAt(0);

        this.board = new GameBoard(this.numRows, this.numColumns);

        this.board.genEmptyMap();


        for(let p of info.initial){
            let row = parseInt(p.row) - 1;
            let col = p.column.charCodeAt(0) - "A".charCodeAt(0);
            console.log(p, row, col);
            this.board.gameMap[row][col].color = p.color;
        }

        let ninja = new Ninja(ninjaRow, ninjaCol);

        ninja.ninjaBuild();
        ninja.ninjaAvailMoves(this.numRows, this.numColumns);

        this.ninja = ninja;        
        this.gameMap = this.board.gameMap;
        this.numMoves = 0;
        this.score = 0;
    }
    available (direction) {
        this.ninja.ninjaBuild();
        let moves = this.ninja.ninjaAvailMoves(this.numRows, this.numColumns);
        return moves.includes(direction);
    }
    genCloneBoard(gameMap){
        let mapRows = gameMap.length;
        let mapCols = gameMap[0].length;
        let cloneBoard = new GameBoard(mapRows, mapCols);
        this.cloneMap = cloneBoard.gameMap;

        for (var r = 0; r < mapRows; r++) {
            this.cloneMap[r] = [];
            for (var c = 0; c < mapCols; c++) {
                this.cloneMap[r][c] = new Piece(r, c, gameMap[r][c].color);
            }
        }
    }
    checkWin(){
        let mapRows = this.gameMap.length;
        let mapCols = this.gameMap[0].length;

        for (let r = 0; r < mapRows; r++) {
            for (let c = 0; c < mapCols; c++) {
                if(this.gameMap[r][c].color !== "white"){return false;}
            }
        }
        return true;
    }
    updateNumMoves(del){
        this.numMoves += del;
    }
    updateScore(del){
        this.score += del;
    }
}