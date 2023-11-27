# squarepush

## Project Overview

squarepush is a game where the user can move a ninja charecter around a grid, pushing any colored blocks that may be near it. When a 2x2 group of a single color is present next to the ninja, the group becomes removable. The object of the game is to remove all the color from the grid.

## Playing the Game

Below is what the app looks like upon launch; the 5x5 is the default configuration, <br>
so that is the one that is automatically displayed. The ninja can not leave the <br>
board, so only the up and left buttons are active.    

<img src="https://github.com/Shivangi-Sirsiwal/squarepush/assets/152037538/2def9bf4-bc43-4bc3-874b-1cbc4c383356" width = "630">
<br>     
<br>

Below is what the board looks like after moving left. The two blue squares on the left
side of the ninja have been pushed as a result of the ninja's movement. The move count
has been increased by one. The score keeps track of how many colored squares the ninja
has pushed. In this case, moving left caused two colored squares to move, so the score
increases by two. The left, up, and right buttons are now active, and because there is
a 2x2 group of blue squares next to the ninja the remove button also becomes active.      

<img src="https://github.com/Shivangi-Sirsiwal/squarepush/assets/152037538/36070478-7ab5-4231-9b13-4773c134c6a6" width = "500">



In order to run this app, create a react app and replace the src with the one provided here. It is also neccessary to import the svg file in the repository public folder into the app's public folder. The app should then be useable via the npm start command.
