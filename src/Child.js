import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  function handleClick(){
    const newColor = getRandomColor();
    onChangeColor(newColor)
  }

  // onChangeColor = handleColorChange from parent component, so we pass
  // it the new random color for our child elements so that it can update them
  

  
  return <div 
  onClick={handleClick}
  className="child" 
  style={{ backgroundColor: color }} />;
}

export default Child;
