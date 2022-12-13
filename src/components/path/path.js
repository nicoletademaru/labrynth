import React, { useState, useEffect } from "react";
import Canvas from "./canvas";
import "./path.css";

export default function Path(props) {
  const [clicked, setClicked] = useState(null); // bool
  const draw = ctx => {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 80, 80);
  }

  useEffect(() => {
    if (props.path) {
      setClicked(props.path.clicked)
    }
  }, [props])

  return (
    <div>
      <Canvas draw={draw} height={80} width={80}></Canvas>
    </div>
  );
}