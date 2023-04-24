import './index.css';
import Matter from 'matter-js';

import reportWebVitals from './reportWebVitals';

// Create a Matter.js engine
const engine = Matter.Engine.create();
const world = engine.world;

// Create the Gatlon board as a series of Matter.js bodies
let Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// Position of x and y axis
let xPos = 150;
const size = 5;

// Create a Matter.js renderer
const render = Matter.Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 600,
    height: 505,
    wireframes: false,
    background: "black"
  }
}); 

// Create the player's circle (ball)
Composite.add(world, Bodies.circle(300, 10, size));

// Create the pegs
const pegs = [];
const rows = 8;
for(let i = 0; i<=rows; i++){
  for(let j=1; j < i; j++){
    pegs.push(
      Bodies.circle( //40
        300 + (j * 40 - i * (40/2)),
        i * 30,
        4,
        {
          isStatic: true,
          render:{fillStyle: "white"}
        })
    )
  }
}
Composite.add(world, pegs);

// Create the left and right walls (bars)
for(let i = 0; i<=10; i++){
  Composite.add(world, Bodies.rectangle(xPos += 25, 400, 2, 200, 
    { 
      isStatic: true,
      render:{fillStyle: "white"}
    }
  ));
}

// Ground, floor of board
// rectangle(x, y, width, height)
Composite.add(world, Bodies.rectangle(300, 500, 250, 2, 
  { isStatic: true,
    render:{fillStyle: "white"}
  }));

// Counter

// Start the Matter.js engine and renderer
Matter.Engine.run(engine);
Matter.Render.run(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
