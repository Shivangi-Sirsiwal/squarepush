import React from 'react';
import './App.css'
import { layout } from './Layout';

import Model from './MBC/Model';
import { redrawCanvas } from './MBC/Boundaries';
import { Up, Down, Left, Right } from './MBC/Model';

import { moveNinja, moveColorLeft, moveColorRight, moveColorUp, moveColorDown, remove, win } from './MBC/Controllers';

import { config_5x5, config_4x4, config_6x6 } from './GameConfig';

var actualPuzzle = JSON.parse(JSON.stringify(config_5x5));

function App() {
  const [model, setModel] = React.useState(new Model(actualPuzzle));
  const [redraw, forceRedraw] = React.useState(0);

  const appRef = React.useRef(null);
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    redrawCanvas(model, canvasRef.current, appRef.current);
  }, [model, redraw])

  const moveNinjaHandler = (direction) => {
    moveNinja(model, direction);
    if(direction === Left){moveColorLeft(model);}
    if(direction === Right){moveColorRight(model);}
    if(direction === Up){moveColorUp(model);}
    if(direction === Down){moveColorDown(model);}
    setModel(model);
    forceRedraw(redraw+1)   // react to changes, if model has changed.
  }

  const removeGroupHandler = () => {
    remove(model, true);
    setModel(model);
    forceRedraw(redraw+1);
  }

  const newConfig = (config) => {
    actualPuzzle = JSON.parse(JSON.stringify(config));
    setModel(new Model(actualPuzzle));
  }

  return(
    <main style= {layout.Appmain} ref = {appRef}>
      <canvas tabIndex = "1"
      data-testid = "canvas"
      className="App-canvas"
      ref={canvasRef}
      width={layout.canvas.width}
      height={layout.canvas.height}/>

      
      { win(model) ? (<label data-testid="victory-label" style={layout.victory}> You've Won!</label>) : null }

      <label data-testid="moves-label" style={layout.moves}>{"Number Moves: " + model.numMoves}</label>
      <label data-testid="score-label" style={layout.score}>{"Score: " + model.score}</label>

        <div style={layout.buttons}>
           <button data-testid="upbutton" style={layout.upbutton}   onClick={(e) => moveNinjaHandler(Up)} disabled={!model.available(Up) || win(model)} >^</button>
           <button data-testid="leftbutton" style={layout.leftbutton}   onClick={(e) => moveNinjaHandler(Left)} disabled={!model.available(Left) || win(model)} >&lt;</button>
           <button data-testid="rightbutton" style={layout.rightbutton}   onClick={(e) => moveNinjaHandler(Right)} disabled={!model.available(Right) || win(model)} >&gt;</button>
           <button data-testid="downbutton" style={layout.downbutton}   onClick={(e) => moveNinjaHandler(Down)} disabled={!model.available(Down) || win(model)} >v</button>
           <button data-testid="removebutton" style={layout.removebutton}   onClick={(e) => removeGroupHandler()} disabled={!remove(model, false) || win(model)} >Remove</button>
           <button data-testid="resetbutton" style={layout.resetbutton}   onClick={(e) => setModel(new Model(actualPuzzle))} >Reset</button>
           <button data-testid="config4x4button" style={layout.config4x4button}   onClick={(e) => newConfig(config_4x4)} >4x4 Configuration</button>
           <button data-testid="config5x5button" style={layout.config5x5button}   onClick={(e) => newConfig(config_5x5)} >5x5 Configuration</button>
           <button data-testid="config6x6button" style={layout.config6x6button}   onClick={(e) => newConfig(config_6x6)} >6x6 Configuration</button>
        </div>
      </main>

  )
}

export default App;