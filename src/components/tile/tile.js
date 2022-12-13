import React, { useState, useEffect } from "react";
import Canvas from "./canvas";
import "./tile.css";
export default function Tile(props) {
  const [spawn, setSpawn] = useState(null); // num
  const [treasure, setTreasure] = useState(null); // string
  const [orientation, setOrientation] = useState(null); // num
  const [shape, setShape] = useState(null); // string/char
  const [extra, setExtra] = useState(null); // bool

  const COLORS = [null, "red", "green", "yellow", "blue"];

  const draw = ctx => {
    switch (true) { // draw background
      case (shape === "L"):
        ctx.fillStyle = "#AB6B55";
        ctx.fillRect(0, 0, 80, 80);
        ctx.fillStyle = "#E3DFC0";
        ctx.fillRect(20, 0, 40, 60);
        ctx.fillStyle = "#E3DFC0";
        ctx.fillRect(20, 20, 80, 40);
        break;
      case (shape === "I"):
        ctx.fillStyle = "#AB6B55";
        ctx.fillRect(0, 0, 80, 80);
        ctx.fillStyle = "#E3DFC0";
        ctx.fillRect(20, 0, 40, 80);
        break;
      default:
        ctx.fillStyle = "#AB6B55";
        ctx.fillRect(0, 0, 80, 80);
        ctx.fillStyle = "#E3DFC0";
        ctx.fillRect(0, 20, 80, 40);
        ctx.fillStyle = "#E3DFC0";
        ctx.fillRect(20, 20, 40, 80);
        break;
    }

    if (spawn) { // draw spawn
      ctx.beginPath();
      ctx.arc(40, 40, 15, -4, Math.PI);
      ctx.fillStyle = COLORS[spawn];
      ctx.fill();
      ctx.stroke();
    } else if (treasure) { // draw treasure
      ctx.beginPath();
      ctx.moveTo(25, 25);
      ctx.lineTo(55, 55);
      ctx.moveTo(25, 55);
      ctx.lineTo(55, 25);
      ctx.stroke();
    }
  };

  useEffect(() => {
    if (props.tile) {
      const {
        spawn,
        treasure,
        orientation,
        shape,
        extra
      } = props.tile;
      setSpawn(spawn)
      setTreasure(treasure);
      setOrientation(orientation);
      setShape(shape);
      setExtra(extra);
    }
  }, [props])
  return (
    <div>
      <Canvas draw={draw} height={80} width={80} orientation={orientation}></Canvas>
    </div>
  );
}
