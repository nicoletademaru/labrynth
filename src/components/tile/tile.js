import React, { useState, useEffect } from "react";
import Canvas from "./canvas";
import "./tile.css";

export default function Tile(props) {
  const [spawn, setSpawn] = useState(null); // num
  const [treasure, setTreasure] = useState(null); // string
  const [orientation, setOrientation] = useState(null); // num
  const [shape, setShape] = useState(null); // string/char
  const [extra, setExtra] = useState(null); // bool

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