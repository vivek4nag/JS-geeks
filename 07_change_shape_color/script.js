const background = document.querySelector(".background");
const shape = document.getElementById("heart");

const colorChange = document.getElementById("colorChange");
const shapeChange = document.getElementById("shapeChange");

let shapesArr = ["circle", "heart","chevron", "shield", "fish", "bookmark", "infinity", "square", "triangle", "cloud", "rhombus", "diamond", "cross", "crescent", "hexagon", "star", "trapezoid", "pentagon", "decagon", "parallelogram"]

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let Color = `rgb(${r},${g},${b})`;
//   console.log(Color);

  background.style.backgroundColor = Color;
  
}

function newShape(){
    let idx = Math.floor(Math.random() * shapesArr.length);
    // console.log(idx);
    
    let id = shapesArr[idx];
    shape.id = id;
    // console.log(shape);
    

}

colorChange.addEventListener("click", randomColor);

shapeChange.addEventListener("click", newShape)
