import React, { useState, useEffect } from "react";
import Canvas from "./canvas";
import "./path.css";

export default function Path(props) {
  const [clicked, setClicked] = useState(null); // bool
  const [valid, setValid] = useState(null); // bool
  const draw = ctx => {
    switch (true) {
      case (valid === true): 
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, 80, 80);
        break;
      default:          
        ctx.fillStyle = "##1E2127";
        ctx.clearRect(0, 0, 80, 80);
        break;
    }
  }

  useEffect(() => {
    if (props.path) {
      setClicked(props.path.clicked)
      setValid(props.path.valid)
    }
  }, [props])

  return (
    <div>
      <Canvas draw={draw} height={80} width={80}></Canvas>
    </div>
  );
}