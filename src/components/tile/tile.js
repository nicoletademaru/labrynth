import React, { useState, useEffect } from "react";
import "./tile.css";

export default function Tile(props) {
  const [spawn, setSpawn] = useState(null); // num
  const [treasure, setTreasure] = useState(null); // string
  const [orientation, setOrientation] = useState(null); // num
  const [shape, setShape] = useState(null); // string/char
  const [extra, setExtra] = useState(null); // bool
  
  useEffect(() => {
    if (props.tile) {
      setSpawn(props.tile.spawn)
      setTreasure(props.tile.treasure);
      setOrientation(props.tile.orientation);
      setShape(props.tile.shape);
      setExtra(props.tile.extra);
    }
  }, [props])

  return (
    <p className="tile" style={{ transform: `rotate(${orientation}deg)` }}>{shape}</p>
  );
}