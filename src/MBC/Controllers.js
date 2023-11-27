import { Coordinate } from "./Model";

export function moveNinja(model, direction){
    let ninja = model.ninja;
    ninja.move(direction);
    model.updateNumMoves(1);
}

export function moveColorLeft(model){

    //declare all local vars
    let colMax = model.numColumns -1;
    let ninja = model.ninja
    let gameMap = model.gameMap;
    model.genCloneBoard(gameMap);
    let cloneMap = model.cloneMap;
    let pushPiece1;
    let pushPiece2;
    let toPiece1;
    let toPiece2;
    let cloneToPiece1;
    let cloneToPiece2;
    
    //find what pieces are being pushed and where they are going
    let i = ninja.ninjaTopLeft.column - 1;
  
    while(true){

        let toColumn = i - 1;
        if (toColumn < 0) {
            toColumn = colMax
        }
        cloneToPiece1 = cloneMap[ninja.ninjaTopLeft.row][toColumn];
        let clonePushPiece1 = cloneMap[ninja.ninjaTopLeft.row][i];

        pushPiece1 = gameMap[ninja.ninjaTopLeft.row][i];
        toPiece1 = gameMap[ninja.ninjaTopLeft.row][toColumn];
        if (pushPiece1.color === "white") {
            break
        }   
        if (cloneToPiece1.color === "white") {
            toPiece1.color = clonePushPiece1.color
            gameMap[ninja.ninjaTopLeft.row][ninja.ninjaCol].color = "white"
            model.updateScore(1);
            break;
        }
        
        toPiece1.color = clonePushPiece1.color;
        model.updateScore(1);

        i--;

        if(i < 0){i = colMax;}
        if(i === ninja.ninjaTopRight.column){break;}
        
    }

    i = ninja.ninjaTopLeft.column - 1;

    while(true){

        let toColumn = i - 1;
        if (toColumn < 0) {
            toColumn = colMax
        }
        cloneToPiece2 = cloneMap[ninja.ninjaBottomLeft.row][toColumn];
        let clonePushPiece2 = cloneMap[ninja.ninjaBottomLeft.row][i];

        pushPiece2 = gameMap[ninja.ninjaBottomLeft.row][i];
        toPiece2 = gameMap[ninja.ninjaBottomLeft.row][toColumn];

        if (pushPiece2.color === "white") {
            break
        }
        
        if (cloneToPiece2.color === "white") {
            toPiece2.color = clonePushPiece2.color
            gameMap[ninja.ninjaBottomLeft.row][ninja.ninjaCol].color = "white"
            model.updateScore(1);
            break;
        }
        
        toPiece2.color = clonePushPiece2.color;
        model.updateScore(1);

        i--;

        if(i < 0){i = colMax;}
        if(i === ninja.ninjaTopRight.column){break;}
        
    }
}
export function moveColorRight(model){
//RIGHT

    //declare all local vars
    let colMax = model.numColumns -1;
    let ninja = model.ninja
    let gameMap = model.gameMap;
    model.genCloneBoard(gameMap);
    let cloneMap = model.cloneMap;
    let pushPiece1;
    let pushPiece2;
    let toPiece1;
    let toPiece2;
    let cloneToPiece1;
    let cloneToPiece2;
    
    //find what pieces are being pushed and where they are going

    let i = ninja.ninjaTopRight.column + 1;
    while(true){

        let toColumn = i + 1;
        if (toColumn > colMax) {
            toColumn = 0
        }
        let clonePushPiece1 = cloneMap[ninja.ninjaTopRight.row][i];
        cloneToPiece1 = cloneMap[ninja.ninjaTopRight.row][toColumn];

        pushPiece1 = gameMap[ninja.ninjaTopRight.row][i];
        toPiece1 = gameMap[ninja.ninjaTopRight.row][toColumn];
        if (pushPiece1.color === "white") {
            break;
        }
        if (cloneToPiece1.color === "white") {
            toPiece1.color = clonePushPiece1.color
            model.updateScore(1);
            break;
        }
        
        toPiece1.color = clonePushPiece1.color;
        //pushPiece1.color = "white";
        model.updateScore(1);

        i++;

        if(i > colMax){i = 0;}
        if(i === ninja.ninjaTopLeft.column){break;}
        
    }
    gameMap[ninja.ninjaTopRight.row][ninja.ninjaCol+1].color = "white"

    i = ninja.ninjaTopRight.column + 1;

    while(true){

        let toColumn = i + 1;
        if (toColumn > colMax) {
            toColumn = 0
        }
        let clonePushPiece2 = cloneMap[ninja.ninjaBottomRight.row][i];

        cloneToPiece2 = cloneMap[ninja.ninjaBottomRight.row][toColumn];

        pushPiece2 = gameMap[ninja.ninjaBottomRight.row][i];
        toPiece2 = gameMap[ninja.ninjaBottomRight.row][toColumn];
        if (pushPiece2.color === "white") {
            break;
        }
        if (cloneToPiece2.color === "white") {
            toPiece2.color = clonePushPiece2.color
            model.updateScore(1);
            break;
        }
        
        toPiece2.color = clonePushPiece2.color;
        //pushPiece2.color = "white";
        model.updateScore(1);

        i++;

        if(i > colMax){i = 0;}
        if(i === ninja.ninjaBottomLeft.column){break;}
        
    }
    gameMap[ninja.ninjaBottomRight.row][ninja.ninjaCol+1].color = "white"
}
export function moveColorUp(model){

    //declare all local vars
    let rowMax = model.numRows -1;
    let ninja = model.ninja
    let gameMap = model.gameMap;
    model.genCloneBoard(gameMap);
    let cloneMap = model.cloneMap;
    let pushPiece1;
    let pushPiece2;
    let clonePushPiece1;
    let clonePushPiece2;
    let toPiece1;
    let toPiece2;
    let cloneToPiece1;
    let cloneToPiece2;
    
    //find what pieces are being pushed and where they are going
    let i = ninja.ninjaTopLeft.row - 1;
  
    while(true){
        clonePushPiece1 = cloneMap[i][ninja.ninjaTopLeft.column];

        let toRow = i - 1;
        if (toRow < 0) {
            toRow = rowMax
        }
        cloneToPiece1 = cloneMap[toRow][ninja.ninjaTopLeft.column];

        pushPiece1 = gameMap[i][ninja.ninjaTopLeft.column];
        toPiece1 = gameMap[toRow][ninja.ninjaTopLeft.column];
        if (pushPiece1.color === "white") {
            break
        }   
        if (cloneToPiece1.color === "white") {
            toPiece1.color = clonePushPiece1.color
            gameMap[ninja.ninjaRow][ninja.ninjaTopLeft.column].color = "white"
            model.updateScore(1);
            break;
        }
        
        toPiece1.color = clonePushPiece1.color;
       // pushPiece1.color = "white";
        model.updateScore(1);

        i--;

        if(i < 0){i = rowMax;}
        if(i === ninja.ninjaBottomRight.row){break;}
        
    }

    i = ninja.ninjaTopLeft.row - 1

    while(true){
        clonePushPiece2 = cloneMap[i][ninja.ninjaTopRight.column];

        let toRow = i - 1;
        if (toRow < 0) {
            toRow = rowMax
        }
        cloneToPiece2 = cloneMap[toRow][ninja.ninjaTopRight.column];

        pushPiece2 = gameMap[i][ninja.ninjaTopRight.column];
        toPiece2 = gameMap[toRow][ninja.ninjaTopRight.column];

        if (pushPiece2.color === "white") {
            break
        }
        
        if (cloneToPiece2.color === "white") {
            toPiece2.color = clonePushPiece2.color
            gameMap[ninja.ninjaRow][ninja.ninjaTopRight.column].color = "white"
            model.updateScore(1);
            break;
        }
        
        toPiece2.color = clonePushPiece2.color;
        //pushPiece2.color = "white";
        model.updateScore(1);

        i--;

        if(i < 0){i = rowMax;}
        if(i === ninja.ninjaBottomRight.row){break;}
        
    }
}
export function moveColorDown(model){
//RIGHT

    //declare all local vars
    let rowMax = model.numRows -1;
    let ninja = model.ninja
    let gameMap = model.gameMap;
    model.genCloneBoard(gameMap);
    let cloneMap = model.cloneMap;
    let pushPiece1;
    let pushPiece2;
    let toPiece1;
    let toPiece2;
    let clonePushPiece1;
    let clonePushPiece2;
    let cloneToPiece1;
    let cloneToPiece2;
    
    //find what pieces are being pushed and where they are going

    let i = ninja.ninjaBottomRight.row + 1;
    while(true){
        clonePushPiece1 = cloneMap[i][ninja.ninjaBottomRight.column];

        let toRow = i + 1;
        if (toRow > rowMax) {
            toRow = 0
        }
        cloneToPiece1 = cloneMap[toRow][ninja.ninjaBottomRight.column];

        pushPiece1 = gameMap[i][ninja.ninjaBottomRight.column];
        toPiece1 = gameMap[toRow][ninja.ninjaBottomRight.column];
        if (pushPiece1.color === "white") {
            break;
        }
        if (cloneToPiece1.color === "white") {
            toPiece1.color = clonePushPiece1.color
            gameMap[ninja.ninjaRow][ninja.ninjaBottomRight.column].color = "white"
            model.updateScore(1);
            break;
        }
        
        toPiece1.color = clonePushPiece1.color;
       // pushPiece1.color = "white";
        model.updateScore(1);

        i++;

        if(i > rowMax){i = 0;}
        if(i === ninja.ninjaTopRight.row){break;}
        
    }
    gameMap[ninja.ninjaBottomRight.row +1][ninja.ninjaCol+1].color = "white"

    i = ninja.ninjaBottomLeft.row + 1;

    while(true){
        clonePushPiece2 = cloneMap[i][ninja.ninjaBottomLeft.column];
        let toRow = i + 1;
        if (toRow > rowMax) {
            toRow = 0
        }
        cloneToPiece2 = cloneMap[toRow][ninja.ninjaBottomLeft.column];

        pushPiece2 = gameMap[i][ninja.ninjaBottomLeft.column];
        toPiece2 = gameMap[toRow][ninja.ninjaBottomLeft.column];
        if (pushPiece2.color === "white") {
            break;
        }
        if (cloneToPiece2.color === "white") {
            toPiece2.color = clonePushPiece2.color
            model.updateScore(1);
            break;
        }
        
        toPiece2.color = clonePushPiece2.color;
       // pushPiece2.color = "white";
        model.updateScore(1);

        i++;

        if(i > rowMax){i = 0;}
        if(i === ninja.ninjaTopLeft.row){break;}
        
    }
    gameMap[ninja.ninjaBottomLeft.row + 1][ninja.ninjaCol].color = "white"
}

function checkGroup(model, topLeft){
    if(topLeft.row < 0){return false;}
    if(topLeft.row +1 > model.numRows -1){return false;}

    if(topLeft.column < 0){return false;}
    if(topLeft.column + 1 > model.numColumns -1){return false;}

    let gameMap = model.gameMap;
    let initColor = gameMap[topLeft.row][topLeft.column].color;

    if(initColor === "white"){return false;}

    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 2; j++){
            if(gameMap[topLeft.row + i][topLeft.column + j].color !== initColor){return false;}
        }
    }
    return true;
}
function removeGroup(model, topLeft){

    let gameMap = model.gameMap;

    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 2; j++){
            gameMap[topLeft.row + i][topLeft.column + j].color = "white";
        }
    }
    model.updateNumMoves(1);
    model.updateScore(4);
}
export function remove(model, remove){
    let ninja = model.ninja;

    let groupLeft = new Coordinate(ninja.ninjaTopLeft.row, ninja.ninjaTopLeft.column -2);
    if(checkGroup(model, groupLeft)) {
        if(remove){removeGroup(model, groupLeft);}
        return true;}

    let groupRight = new Coordinate(ninja.ninjaTopRight.row, ninja.ninjaTopRight.column +1);
    if(checkGroup(model, groupRight)){
        if(remove){removeGroup(model, groupRight);}
        return true;}

    let groupUp = new Coordinate(ninja.ninjaTopLeft.row -2, ninja.ninjaTopLeft.column);
    if(checkGroup(model, groupUp)){
        if(remove){removeGroup(model, groupUp);}
        return true;}

    let groupDown = new Coordinate(ninja.ninjaBottomLeft.row + 1, ninja.ninjaBottomLeft.column);
    if(checkGroup(model, groupDown)){
        if(remove){removeGroup(model, groupDown);}
        return true;}

    return false;
}

export function win(model){
   return model.checkWin();
}