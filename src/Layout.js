export const layout = {
    canvas : {
          height: "500",
          width: "500",
      },
    
    Appmain : {
      backgroundColor: "#320453",
      height: "100vh",
      width: "100vw",
    },

    moves: { 
        position: "absolute",
        left:500,
        top:50,
        color:"yellow",
        backgroundColor: "#320453",
        width:150,
      },

    score: { 
        position: "absolute",
        left:500,
        top:80,
        color:"yellow",
        backgroundColor: "#320453",
        width:150,
      },

    victory: { 
        position: "absolute",
        left: 10,
        top: 197,
        color: "white",
        backgroundColor: "green",
        width: 470,
        fontSize: "80px",  // Adjust the value to make the text bigger
        fontWeight: "bold"  // Use "bold" for a thicker font

      },

    buttons: { 
        position: "absolute",
        left: 550,
        top:90
      },

      upbutton:  {
        position: "absolute",
        left: 50,
        top: 80,
      },
      
      downbutton : {
        position: "absolute",
        left: 50,
        top: 120,
      },
      
      leftbutton : {
        position: "absolute",
        top: 100,
      },
      
      rightbutton : {
        position: "absolute",
        top: 100,
        left: 100,
      },

      removebutton : {
        position: "absolute",
        left: 30,
        top: 170,
      },

      resetbutton : {
        position: "absolute",
        left: -30,
        top: 385,
      },

      config4x4button : {
        position: "absolute",
        left: -510,
        top: 430,
      },
      
      config5x5button : {
        position: "absolute",
        left: -360,
        top: 430,
      },

      config6x6button : {
        position: "absolute",
        left: -210,
        top: 430,
      },
}