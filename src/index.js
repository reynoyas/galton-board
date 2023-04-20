import './index.css';
import Matter, { World } from 'matter-js';

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
let yPos = 400;
const size = 7;

// Create a Matter.js renderer
const render = Matter.Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false,
    background: "black"
  }
}); 

// Create the player's circle (ball)
Composite.add(world, Bodies.circle(300, 10, size));

// Create the pegs

// Create the left and right walls (bars)
for(let i = 0; i<=7; i++){
  Composite.add(world, Bodies.rectangle(xPos += 25, 400, 2, 200, 
    { 
      isStatic: true
    }
  ));
}

// Ground, floor of board
// rectangle(x, y, width, height)
Composite.add(world, Bodies.rectangle(300, 500, 300, 2, { isStatic: true}));

// Counter

// Start the Matter.js engine and renderer
Matter.Engine.run(engine);
Matter.Render.run(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
